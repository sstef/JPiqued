import React from 'react';
import Root from './components/root';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {

    const boards = {};
    const pins = {};
    window.currentUser.boards.forEach(board => {
      boards[board.id] = board;
    });
    window.currentUser.pins.forEach(pin => {
      pins[pin.id] = pin;
    });

    window.currentUser.boards = Object.keys(boards);
    window.currentUser.pins = Object.keys(pins);


    const preloadedState = {
      session: {
        currentUser: window.currentUser
      },
      entities: {
        boards,
        pins
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
