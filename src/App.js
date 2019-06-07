import React from 'react';

import './assets/styles/universal.scss';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import Header from './assets/components/elements/headerComponent/header';
function App() {
  return (
    <Router>
    <div className="App">

        <Header />

    </div>
    </Router>
  );
}

export default App;
