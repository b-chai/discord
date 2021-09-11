import React from 'react';
import { Switch,Link, Route } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MessageIndexContainer from './messages/message_index_container'
import ServerIndexContainer from './server/server_index_container';
import ChannelIndexContainer from './channel/channel_index_container';
import Homepage from './home/homepage';

const App = () => (
  <div className="app">
    <Switch>
      <ProtectedRoute exact path="/channels" component={ChannelIndexContainer}/>
      <ProtectedRoute exact path="/servers" component={ServerIndexContainer} />
      <ProtectedRoute exact path="/messages" component={MessageIndexContainer}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route path="/" component={Homepage}/>
    </Switch>
  </div>
);

export default App;
