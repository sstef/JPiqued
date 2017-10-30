import * as PinActions from '../actions/pin_actions'

export const fetchPins = () => (
  $.ajax({
    url: 'api/pins',
    method: 'GET'
  })
);

export const fetchPin = id => (
  $.ajax({
    url: `api/pins/${id}`,
    method: 'GET'
  })
);

export const createPin = formData => {
  return $.ajax({
    url: `api/pins`,
    method: 'POST',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success: function(pin) {
      PinActions.fetchPin(pin);
   }
 });
}

export const updatePin = pin => (
  $.ajax({
    url: `api/pins/${pin.id}`,
    method: 'PATCH',
    data: { pin }
  })
);

export const deletePin = pinId => (
  $.ajax({
    url: `api/pins/${pinId}`,
    method: 'DELETE',
  })
);
