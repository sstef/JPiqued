import * as UserUtil from '../util/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';


export const fetchUser = () => dispatch => {
  return UserUtil.fetchUser().then(users => dispatch(receiveAllUser(users)))
};

export const fetchUser = user => dispatch => {
  return UserUtil.fetchUser(user).then(user => dispatch(receiveUser(user)))
};

export const updateUser = user => dispatch => {
  return UserUtil.updateUser(user).then(user => dispatch(receiveUser(user)))
};

export const deleteUser = userId => dispatch => {
  return UserUtil.deleteUser(userId).then(user => dispatch(removeUser(userId)))
};

const receiveUser = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const removeUser = userId => ({
  type: REMOVE_USER,
  userId
});
