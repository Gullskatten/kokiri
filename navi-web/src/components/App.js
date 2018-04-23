import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NoMatch from './NoMatch';
import Home from './Home';
import Navbar from './Navbar';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
