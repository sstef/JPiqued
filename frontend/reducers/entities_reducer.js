import { combineReducers } from 'redux';
import PinReducer from './pin_reducer';
import BoardReducer from './board_reducer';

const EntitiesReducer = combineReducers({
  pins: PinReducer,
  boards: BoardReducer
});

export default EntitiesReducer;
