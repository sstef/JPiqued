import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


function SessionReducer (state = { currentUser: null }, action) {
  Object.freeze(state);
  switch(action.type){

    case RECEIVE_CURRENT_USER:
      let user = action.user || {pins: [], boards: []}
      const newUser = Object.assign({}, user);
      newUser.boards = newUser.boards.map(board => board.id);
      newUser.pins = newUser.pins.map(pin => pin.id);
      const newState = { currentUser: newUser };
      if (action.user === null) {
        return {currentUser: {pins: [], boards: []} }
      } else {
        return merge({}, state, newState);
      }

    default:
      return state;
  }

}


export default SessionReducer;
