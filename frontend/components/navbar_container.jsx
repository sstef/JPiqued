import { logoutAction } from '../actions/session_actions';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import classes from '../../assets/stylesheets/navbar.scss'

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutAction())
  };
};

const NavBar = (props) => {
  if (props.currentUser){
    return (
      <div className="navigation-header">
        <div className="navlogo-container clickable">
          <div className="logo"> </div>
        </div>

        <div className="user-dropdown clickable">
          {props.currentUser.name.split(' ')[0]}
        </div>

        <div className="logout-button clickable">
          <button onClick={props.logout}>Logout!</button>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
