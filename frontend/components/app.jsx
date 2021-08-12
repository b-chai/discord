import React from 'react';
import { Switch,Link } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MessageIndexContainer from './messages/message_index_container'
import ServerIndexContainer from './server/server_index_container';

const App = () => (
  <div className="app">
    <header>
      {/* <Link to="/">
        <h1>Discord Clone</h1>
      </Link> */}
    </header>
    <Switch>
      <ProtectedRoute exact path="/servers" component={ServerIndexContainer} />}
      {/* <ProtectedRoute exact path="/messages" component={MessageIndexContainer}/> */}
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
