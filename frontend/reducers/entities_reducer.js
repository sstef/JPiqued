import { combineReducers } from 'redux';
import PinReducer from './pin_reducer';
import BoardReducer from './board_reducer';
import UserReducer from './user_reducer';
import CommentReducer from './comment_reducer';

const EntitiesReducer = combineReducers({
  pins: PinReducer,
  boards: BoardReducer,
  users: UserReducer,
  comments: CommentReducer
});

export default EntitiesReducer;
