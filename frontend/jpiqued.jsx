import React from 'react';
import Root from './components/root';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { login, signup, logout } from './util/session_api_util';
import { receiveSessionErrors, receiveCurrentUser, loginAction, signupAction, logoutAction} from './actions/session_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
