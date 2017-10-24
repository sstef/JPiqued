import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


function SessionReducer (state = { currentUser: null }, action) {
  Object.freeze(state);
  switch(action.type){

    case RECEIVE_CURRENT_USER:
      const newState = { currentUser: action.user };
      return merge({}, state, newState);

    default:
      return state;
  }

}


export default SessionReducer;
