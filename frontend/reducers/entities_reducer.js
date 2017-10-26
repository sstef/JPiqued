import { combineReducers } from 'redux';
import PinReducer from './pin_reducer';
import BoardReducer from './board_reducer';
import UserReducer from './user_reducer';

const EntitiesReducer = combineReducers({
  pins: PinReducer,
  boards: BoardReducer,
  users: UserReducer
});

export default EntitiesReducer;
