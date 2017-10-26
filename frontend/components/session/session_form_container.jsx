import React from 'react';
import { connect } from 'react-redux';
import { loginAction, receiveSessionErrors, signupAction, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form'


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser),
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? loginAction : signupAction;
  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(receiveSessionErrors([])),
    formType
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
