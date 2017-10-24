import merge from 'lodash/merge';
import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

//errors will point to errors reducer which will point to sessionErrorsReducer

function SessionErrorsReducer(state = [], action){
  Object.freeze(state);
  switch(action.type){

    case RECEIVE_CURRENT_USER:
      return [];

    case RECEIVE_SESSION_ERRORS:
      return action.errors;

    default:
      return state;
  }

}


export default SessionErrorsReducer;
