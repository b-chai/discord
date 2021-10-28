import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(e){
    e.preventDefault();
    let demo = { username: "Demo", password: "test123"};
    this.props.processForm(demo)
  }

  render() {
    return (
      <div className="login-background">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            <div className="login-form">
             <span className='welcome'> Welcome back! </span>
             <span className='welcome-subtext'> We're so excited to see you again! </span>
             <br />
             <span className="errors"> {this.renderErrors()} </span>
              <br/>
              <label className='uppercase'>Username</label>
              <br />
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              <br/>
              <label className='uppercase'>Password</label>
              <br />
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              <br/>
              {
                this.props.formType === 'Signup' ? 
                <label className='uppercase'>Email:
                  <br />
                  <input type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                  />
                </label> : ''
              }
              
            <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            <br />
              {/* Please {this.props.formType} or {this.props.navLink} */}
              {
                this.props.formType === "Login" ?
                <div className="login-bottom-text">
                  Need an account? {this.props.navLink}
                </div> :
                <div>
                  {this.props.navLink}
                </div>
              }
            </div>


          </form>
            <div className="demo">
                <button type='button' className="session-submit" onClick={e=> this.demoLogin(e)}> Demo Login </button>
            </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
