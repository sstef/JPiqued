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
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up</Link>;
    } else {
      return <Link to="/login">log in</Link>;
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
      <ul className="errors">
        {errors}
      </ul>
    );
  }

  render() {
    let text = this.props.formType === 'login' ? "log in" : "sign up"
    let body = document.getElementById('root');
    body.style.backgroundImage = 'url(https://i.pinimg.com/originals/0e/75/d7/0e75d7ff4a5f47686defa9b3edfb202e.jpg)';
    return (
      <div className="login-page">

        <div className="session-box">
          <div className="logo-container">
            <div className="logo"> </div>
          </div>
          <h1>Welcome to JPiqued</h1>
          <div>
            Please { text } or {this.navLink()}
          </div>
          <div clasName="errors">
            {this.renderErrors()}
          </div>
          <form onSubmit={this.handleSubmit} className="session-form">

            <label className={(this.props.match.path === "/signup") ? 'email-form' : 'hidden'} >
              <input type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={this.update('name')}/>
            </label>
            <p></p>

            <label>
              <input type="text"
                value={this.state.email}
                placeholder="Email"
                onChange={this.update('email')} />
            </label>
            <p></p>

            <label>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')} />
            </label>
            <p></p>

            <input type="submit" value={text} />

          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm)
