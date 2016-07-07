import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './Main';

import Layout from './components/main/Layout';
import User from './components/main/User';
import Login from './components/guest/Login';
import Register from './components/guest/Register';
import Forgot from './components/guest/Forgot';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Layout}/>
      <Route path="/messages" component={Layout}/>
      <Route path="/user/:userId" component={User}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/forgot" component={Forgot}/>
    </Route>
  </Router>
);
