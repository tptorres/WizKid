import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './navbar';
import Footer from './footer';
import Home from './Home'
import Activity from './Activity'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/activity/writing-activity" component={Activity} />
          </div>
          <Footer/>
        </div>
        </Router>
    );
  }
}

export default App;
