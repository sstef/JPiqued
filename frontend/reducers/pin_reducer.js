import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN } from '../actions/pin_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';
import merge from 'lodash/merge';

const PinReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PINS:
      return merge({}, state, action.pins);
    //case RECEIVE_USER_PINS:
    case RECEIVE_USER:
      const newPins = {};
      action.user.pins.forEach( pin => newPins[pin.id] = pin );
      return merge({}, newPins);
    case RECEIVE_BOARD:
      const boardPins = {};
      action.board.pins.forEach( pin => boardPins[pin.id] = pin );
      return merge({}, state, boardPins);
    case RECEIVE_PIN:
      return merge({}, state, action.pin);
    case REMOVE_PIN:
      let newState = merge({}, state);
      delete newState[action.pinId];
      return newState;
    default:
      return state;
  }
};

export default PinReducer;
