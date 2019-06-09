import React from "react";

import Videos from "../../data/video.json";

import { Link } from "react-router-dom";

import "../../assets/styles/video.scss";

class VideoPage extends React.Component {
  render() {
    return (
      <div className="video-list">
        {Videos.map((video, index) => {
          let permalink =
            "/video/" + video.title.replace(/\s+/g, "-").toLowerCase();
          return (
                <img
                  classaName="video-thumb"
                  src={video.thumb}
                  alt=""
                />
          );
        })}
      </div>
    );
  }
}

export default VideoPage;
