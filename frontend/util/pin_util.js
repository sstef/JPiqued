export const fetchPins = () => (
  $.ajax({
    url: '/pins',
    method: 'GET'
  });
)

export const fetchPin = id => (
  $.ajax({
    url: `/pins/${id}`,
    method: 'GET'
  });
)

export const createPin = pin => (
  $.ajax({
    url: `/pins`,
    method: 'POST',
    data: { pin }
  });
)

export const updatePin = pin => (
  $.ajax({
    url: `/pins/${pin.id}`,
    method: 'PATCH',
    data: { pin }
  });
)

export const deletePin = pinId => (
  $.ajax({
    url: `/pins/${pinId}`,
    method: 'DELETE',
  })
)
