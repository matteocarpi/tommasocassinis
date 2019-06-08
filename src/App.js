import React from 'react';

import './assets/styles/universal.scss';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import Videos from './data/video.json';
import Video from './components/elements/video';
import Header from './components/elements/headerComponent/header';

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

function App() {
  return (
    <Router>
    <div className="App">

        <Header />

        {/* {Videos.map((video, index) => {
            return <Video title={video.title} />
          }
        )} */}

        {Videos.map((video, index) => {
            let permalink = '/video/' + video.title.replace(/\s+/g, '-').toLowerCase();
            return <Route exact path={permalink} render={() => <Video
              title={video.title}
              link={video.link}
              copyright={video.copyright}
              description={video.description}
              crew={video.crew}
              specialThanks={video.specialThanks}
              otherInfo={video.otherInfo}
              partners={video.partners}
            />} />
          })}
    </div>
    </Router>
  );
}

export default App;
