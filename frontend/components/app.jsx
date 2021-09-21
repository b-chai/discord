import React from 'react';
import { Switch,Link, Route } from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ServerIndexContainer from './server/server_index_container';
import Homepage from './home/homepage';

const App = () => (
  <div className="app">
    <Switch>
      {/* App */}
      <ProtectedRoute exact path="/servers" component={ServerIndexContainer} />
      <ProtectedRoute exact path="/servers/:serverId" component={ServerIndexContainer} />

      {/* Login/Signup page */}
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

      {/* Homepage */}
      <Route path="/" component={Homepage}/>
    </Switch>
  </div>
);

export default App;
