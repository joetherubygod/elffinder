import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Content from './Content';
import User from './User';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Content}/>
      <Route path="/content" component={Content}/>
      <Route path="/user/:userId" component={User}/>
    </Route>
  </Router>
);
