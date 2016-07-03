import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import main from './main';
import messages from './components/main/messages';

import User from './components/main/User';

import login from './components/guest/login';
import register from './components/guest/register';




export default (
  <Router history={browserHistory}>
    <Route path="/" component={main}>
      <IndexRoute component={messages}/>
      <Route path="/messages" component={messages}/>
      <Route path="/user/:userId" component={User}/>
    </Route>
    <Route path="/login" component={login}/>
    <Route path="/register" component={register}/>
  </Router>
);
