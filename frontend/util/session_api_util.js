export const signup = (user) => {   //expect user to be object with username and password
  return $.ajax({
      url: 'api/users',
      method: "POST",
      data: user
  });
};

export const login = (user) => {   //expect to be object with username and password NOT NESTED
  return $.ajax({
      url: 'api/session',
      method: "POST",
      data: user
  });
};

export const logout = () => {
  return $.ajax({
      url: 'api/session',
      method: "DELETE",
  });
};
