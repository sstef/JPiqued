import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  componentWillReceiveProps (nextProps){
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    debugger
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign up</Link>;
    } else {
      return <Link to="/login">Log in</Link>;
    }
  }

  renderErrors() {
    const errors = this.props.errors.map((error, i) => {
      return (
        <li key={`error-${i}`}>
          {error}
        </li>
    )});

    return(
      <ul>
        {errors}
      </ul>
    );
  }

  render() {
    let body = document.getElementById('root');
    body.style.backgroundImage = 'url(https://i.pinimg.com/originals/0e/75/d7/0e75d7ff4a5f47686defa9b3edfb202e.jpg)';
    return (
      <div className="login-page">
        <div className="session-box">
          <h1>Welcome to JPiqued</h1>
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit}>
            <label className={(this.props.match.path === "/signup") ? 'email-form' : 'hidden'} >
              Name:
              <input type="text" value={this.state.name} onChange={this.update('name')}/>
            </label>
            <p></p>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')} />
            </label>
            <p></p>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')} />
            </label>
            <p></p>
            <input type="submit" value={this.props.formType} />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm)
