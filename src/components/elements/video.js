import React from "react";

import ReactPlayer from "react-player";

import "../../assets/styles/video.scss";
function Video(video) {
  const link = "https://player.vimeo.com/video/" + video.link
  return (
    <div className="video-page">
      <div className="video-wrap">
        {/* <ReactPlayer
          className="embedded-video"
          url={video.link}
          width= '100%'
          height='100%'
        /> */}
        <iframe className="video-player" src={link} frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true">
        </iframe>
      </div>
      <div className="video-info">
        <div className="video-title">
          <h2>{video.title}</h2>
          <span className="copyright">©{video.copyright}</span>
        </div>

        <div className="video-description">
          <p>{video.description}</p>
        </div>

        <div className="crew">
          <h3>CREW</h3>

          {video.crew.map((crew, index) => {
            return (
              <p className="crew-role">
                <strong>{crew.role}</strong>: {crew.name}
              </p>
            );
          })}
        </div>

        <div classNames="partners">
          {video.partners.map((partner, index) => {
            return <img className="partner-logo" src={partner.logo} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Video;
