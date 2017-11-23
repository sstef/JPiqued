import * as UserActions from '../actions/user_actions'

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

export const updateUser = userData => (
  $.ajax({
    url: `api/users/${user.id}`,
    method: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: userData,
    success: function(user) {
      UserActions.fetchUser(user);
   }
 })
);

export const deleteUser = userId => (
  $.ajax({
    url: `api/users/${user.id}`,
    method: 'DELETE'
  })
)
