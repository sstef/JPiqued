import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

// give user of form {user: {username: password: }}
export const loginAction = (user) => (dispatch) => {
  return SessionUtil.login(user)
    .then((response) => {
      dispatch(receiveCurrentUser(response))},
      (errors) => {
        dispatch(receiveSessionErrors(errors.responseJSON))
    });
 }

// give user of form { user: {username: password:} }
export const signupAction = (user) => (dispatch) => {
  return SessionUtil.signup(user)
    .then((response) => {
      dispatch(receiveCurrentUser(response))},
      (errors) => {
        dispatch(receiveSessionErrors(errors.responseJSON))
    });
  }


export const logoutAction = () => (dispatch) => {
  return SessionUtil.logout()
    .then((response) =>{
      dispatch(receiveCurrentUser(null))},
      (errors) => {
        dispatch(receiveSessionErrors(errors.responseJSON))
    });
}
