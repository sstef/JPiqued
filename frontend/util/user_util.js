export const fetchUsers = () => (
  $.ajax({
    url: 'api/users',
    method: 'GET'
  })
);

export const fetchUser = id => (
  $.ajax({
    url: `api/users/${id}`,
    method: 'GET'
  })
);

export const updateUser = user => (
  $.ajax({
    url: `api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  })
);

export const deleteUser = userId => (
  $.ajax({
    url: `api/users/${user.id}`,
    method: 'DELETE'
  })
)
