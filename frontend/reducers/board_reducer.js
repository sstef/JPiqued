import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_PINS } from '../actions/pin_actions';
import merge from 'lodash/merge';

const BoardReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_BOARDS:
      return merge({}, action.boards);
    case RECEIVE_USER:
      const newBoards = {};
      action.user.boards.forEach( board => newBoards[board.id] = board );
      return merge({}, state, newBoards);
    case RECEIVE_PINS:
      const nwBoards = {};
      Object.values(action.pins).forEach(pin => (nwBoards[pin.board.id] = pin.board));
      return merge({}, state, nwBoards);
    case RECEIVE_BOARD:
      const newBoard = merge({}, action.board);
      newBoard.pins = newBoard.pins.map(pin => pin.id);
      newBoard.creator_id = newBoard.creator.id;
      return merge({}, state, { [newBoard.id]: newBoard });
    case REMOVE_BOARD:
      let newState = merge({}, state);
      delete newState[action.board.id];
      return newState;
    default:
      return state;
  }
}

export default BoardReducer;
