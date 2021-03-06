import React from "react";
import "../../assets/styles/video.scss";

function Video(video) {
  const link = "https://player.vimeo.com/video/" + video.link + "?color=558693&title=0&byline=0&portrait=0"
  const frameStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%'
  }
  const divStyle = {
      padding: '56.25% 0 0 0',
      position: 'relative'
  }
  return (
    <div className="video-page">
      <div className="video-wrap">

        <div style={divStyle}><iframe title={video.title} src={link} style={frameStyle} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <div className="video-info">
        <div className="video-title">
          <h2>{video.title}</h2>
          <span className="copyright">©{video.copyright}</span>
        </div>

        <div className="video-description">
          <p key={video.title + 'description'} dangerouslySetInnerHTML={ {__html: video.description}} />
        </div>

        <div className="crew">
          <h4>CREW</h4>

          {video.crew.map((crew, index) => {
            return (
              <p key={video.title + crew.name + crew.role} className="crew-role">
                
                <strong>{crew.role}</strong>: {crew.name}
              </p>
            );
          })}
        </div>

        <div className="partners">
          {video.partners.map((partner, index) => {
            return <a key={video.title + partner.link} href={partner.link} rel="noopener noreferrer" target="_blank" ><img className="partner-logo" src={partner.logo} alt="" /></a>;
          })}
        </div>
      </div>

    </div>

  );
}

export default Video;
