export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

import * as PinUtil from '../utl/pin_util';

export const fetchPins = () => dispatch => {
  return PinUtil.fetchPins().then(pins => dispatch(receiveAllPins(pins)))
};

export const fetchPin = pin => dispatch => {
  return PinUtil.fetchPin(pin).then(pin => dispatch(receivePin(pin)))
};

export const createPin = pin => dispatch => {
  return PinUtil.createPin(pin).then(pin => dispatch(receivePin(pin)))
};

export const updatePin = pin => dispatch => {
  return PinUtil.updatePin(pin).then(pin => dispatch(receivePin(pin)))
};

export const deletePin = pinId => dispatch => {
  return PinUtil.deletePin(pinId).then(pin => dispatch(removePin(pinId)))
};

const RECEIVE_PINS = pins => ({
  type: RECEIVE_PINS,
  pins
});

const RECEIVE_PIN = pin => ({
  type: RECEIVE_PIN,
  pin
});

const REMOVE_PIN = pinId => ({
  type: REMOVE_PIN,
  pinId
});
