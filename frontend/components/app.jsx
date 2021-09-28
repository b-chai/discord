import React from 'react';
import { Switch,Link, Route } from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Application from './application/main';
import Homepage from './home/homepage';

const App = () => (
  <div className="app">
    <Switch>

      {/* App */}
      <ProtectedRoute path="/servers" component={Application}/>

      {/* Login/Signup page */}
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

      {/* Homepage */}
      <Route path="/" component={Homepage}/>
      
    </Switch>
  </div>
);

export default App;
