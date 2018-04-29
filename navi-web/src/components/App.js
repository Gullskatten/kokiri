import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import NoMatch from "./NoMatch";
import Home from "./Home";
import Navbar from "./Navbar";
import styled from "styled-components";

const history = createHistory();

const AppContainer = styled.div`
   
`;

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <AppContainer>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/deployments/overview" component={Home} />
            <Route exact path="/deployments/new" component={Home} />
            <Route exact path="/deployments/manage" component={Home} />
            <Route exact path="/environments/overview" component={Home} />
            <Route exact path="/environments/new" component={Home} />
            <Route exact path="/environments/manage" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
