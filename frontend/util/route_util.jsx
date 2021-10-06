import React from 'react';
import { connect,useSelector } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const Auth = ({ component: Component, path, loggedIn, exact }) => {
  // console.log("------------")
  // console.log(useSelector((state)=> console.log(state)))
  // console.log("------------")

  // const server = useSelector((state)=> state.entities.servers)
  // const channel = useSelector((state)=> state.entities.channels)
  // const firstServer = Object.keys(server)[0]
  // const firstChannel = Object.keys(channel)[0]

  // console.log(server,channel)

  return (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      // todo - update route
      <Redirect to="/servers/1/1" />
    )
  )} />
)};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.id)}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
