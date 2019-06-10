import React from "react";

import {Link} from "react-router-dom";
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
        <iframe title={video.title.replace(/\s+/g, "-").toLowerCase()}className="video-player" src={link} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}>
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

        <div className="partners">
          {video.partners.map((partner, index) => {
            return <img className="partner-logo" src={partner.logo} alt="" />;
          })}
        </div>
      </div>
      <Link to="/video"> Back to all videos </Link>
    </div>

  );
}

export default Video;
