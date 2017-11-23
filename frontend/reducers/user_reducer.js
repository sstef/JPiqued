import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';
import merge from 'lodash/merge'

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USERS:
      return merge({}, action.users);
    case RECEIVE_BOARD:
      return merge({}, state, {[action.board.creator.id]: action.board.creator})
    case RECEIVE_USER:
      const newUser = Object.assign({}, action.user.user);
      newUser.pins = action.user.pins.map(pin => pin.id);
      newUser.boards = action.user.boards.map(board => board.id);
      return merge({}, state, { [newUser.id]: newUser });
    case REMOVE_USER:
      let newState = merge({}, state);
      delete newState[action.user.id];
      return newState;
    default:
      return state;
  }
}

export default UserReducer;
