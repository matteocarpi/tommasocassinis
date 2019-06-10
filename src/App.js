import React from "react";

import "./assets/styles/universal.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Videos from "./data/video.json";

import VideoPage from "./components/pages/videoPage";
import ContactPage from "./components/pages/contactPage";
import Video from "./components/elements/video";
import Header from "./components/elements/headerComponent/header";

function App() {
  return (
    <Router basename="/tommasocassinis">
      <div className="App">
        <Header />

        <Route exact path="/" component={VideoPage} />
        <Route exact path="/contact" component={ContactPage} />

        {Videos.map((video, index) => {
          let permalink =
            "/video/" + video.title.replace(/\s+/g, "-").toLowerCase();
          return (
            <Route key={video.title}
              exact
              path={permalink}
              render={() => (
                <Video
                  title={video.title}
                  link={video.link}
                  copyright={video.copyright}
                  description={video.description}
                  crew={video.crew}
                  specialThanks={video.specialThanks}
                  otherInfo={video.otherInfo}
                  partners={video.partners}
                />
              )}
            />
          );
        })}

        <footer> Copyright©2019 Tommaso Cassinis</footer>
      </div>
    </Router>
  );
}

export default App;
