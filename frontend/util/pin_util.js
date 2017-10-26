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

export const createPin = pin => (
  $.ajax({
    url: `api/pins`,
    method: 'POST',
    data: { pin }
  })
);

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
