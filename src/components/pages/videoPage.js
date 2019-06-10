import React from "react";

import Videos from "../../data/video.json";

import { Link } from "react-router-dom";

import "../../assets/styles/video.scss";

class VideoPage extends React.Component {
  render() {
    return (
      <div className="video-list">
        {Videos.map((video, index) => {
          const thumb = video.thumb;
          const thumbStyle = {
            color: "blue",
            backgroundImage: "url(" + thumb + ")"
          };
          let permalink =
            "/video/" + video.title.replace(/\s+/g, "-").toLowerCase();
          return (
            <div className="video-thumb-wrap">
              <Link to={permalink}>
                <div className="video-thumb" style={thumbStyle}>
                  <img className="thumb-graphic" src={video.graphic} alt=""/>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default VideoPage;
