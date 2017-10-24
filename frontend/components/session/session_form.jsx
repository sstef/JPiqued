import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
      <ul>
        {errors}
      </ul>
    );
  }

  render() {
    return (
      <div className="">
        <h1>Welcome to JPiqued</h1>
        <br/>
        Please {this.props.formType} or {this.navLink()}
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>
          <p></p>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>
          <p></p>
          <label className={(this.props.match.path === "/login") ? 'hidden' : ''}>
            Email:
            <input type="text" value={this.state.email} onChange={this.update('')}/>
          </label>
          <p></p>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm)
