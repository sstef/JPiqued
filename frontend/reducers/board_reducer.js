import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const BoardReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOARDS:
      return merge({}, action.boards);
    case RECEIVE_USER:
      const newBoards = {};
      action.user.boards.forEach( board => newBoards[board.id] = board );
      return merge({}, newBoards);
    case RECEIVE_BOARD:
      return merge({}, state, {[action.board.id]: action.board});
    case REMOVE_BOARD:
      let newState = merge({}, state);
      delete newState[action.board.id];
      return newState;
    default:
      return state;
  }
}

export default BoardReducer;
