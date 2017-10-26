import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge'

const BoardReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_USERS:
      return merge({}, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case REMOVE_USER:
      let newState = merge({}, state);
      delete newState[action.user.id];
      return newState;
    default:
      return state;
  }
}
