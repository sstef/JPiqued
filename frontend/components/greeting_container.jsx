import { logoutAction } from '../actions/session_actions';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutAction())
  };
};

const Greeting = (props) => {
  if (props.currentUser){
    return (
      <div className="login-bar">
        <h3>Welcome! {props.currentUser.username}</h3>
        <button onClick={props.logout}>Logout!</button>
      </div>
    );
  }else{
    return (
      <div className="logout-bar">
        <Link to='/signup'>Sign Up!</Link>
        <Link to='/login'>Log In!</Link>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
