import React from 'react';
import { Link } from 'react-router-dom';

// creates welcome message and button to logout, when logged in

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );

  const personalGreeting = () => (
    <div className="sidebar-content">
      <hgroup className="header-group">
        <h2 className="header-name">Welcome, {currentUser.username}!</h2>
        <button> <Link to="/server"></Link> Open DiscordClone</button>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </hgroup>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
