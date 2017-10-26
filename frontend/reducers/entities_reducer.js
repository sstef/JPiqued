import { combineReducers } from 'redux';
import PinReducer from './pin_reducer';

const EntitiesReducer = combineReducers({
  pins: PinReducer
});

export default EntitiesReducer;
