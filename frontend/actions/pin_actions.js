export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

import * as PinUtil from '../util/pin_util';

export const fetchPins = () => dispatch => {
  return PinUtil.fetchPins().then(pins => {
    dispatch(receivePins(pins))
  })
};

export const fetchPin = id => dispatch => {
  return PinUtil.fetchPin(id).then(pin => dispatch(receivePin(pin)))
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

const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

const removePin = pinId => ({
  type: REMOVE_PIN,
  pinId
});
