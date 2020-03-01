import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Dummy from './dummyfile';
import Page2 from './page2';

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Dummy} />
          <Route path="/page2" component={Page2} />
          <Redirect path="*" exact to="/" />
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;
