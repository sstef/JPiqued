import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


function SessionReducer (state = { currentUser: null }, action) {
  Object.freeze(state);
  switch(action.type){

    case RECEIVE_CURRENT_USER:
      const newUser = Object.assign({}, action.user);
      newUser.boards = newUser.boards.map(board => board.id);
      newUser.pins = newUser.pins.map(pin => pin.id);
      const newState = { currentUser: newUser };
      return merge({}, state, newState);

    default:
      return state;
  }

}


export default SessionReducer;
