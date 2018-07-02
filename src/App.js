import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavLink to="/withoutContext">Without Context</NavLink>
          <NavLink to="/withContext">With Context</NavLink>
          <Switch>
            {
              routes.map(route => (
                <Route id={route.id} path={route.path} component={route.component} />
              ))
            }
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
