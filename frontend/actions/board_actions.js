import * as BoardUtil from '../util/board_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';


export const fetchBoard = () => dispatch => {
  return BoardUtil.fetchBoard().then(boards => dispatch(receiveAllBoard(boards)))
};

export const fetchBoard = board => dispatch => {
  return BoardUtil.fetchBoard(board).then(board => dispatch(receiveBoard(board)))
};

export const createBoard = board => dispatch => {
  return BoardUtil.createBoard(board).then(board => dispatch(receiveBoard(board)))
};

export const updateBoard = board => dispatch => {
  return BoardUtil.updateBoard(board).then(board => dispatch(receiveBoard(board)))
};

export const deleteBoard = boardId => dispatch => {
  return BoardUtil.deleteBoard(boardId).then(board => dispatch(removeBoard(boardId)))
};

const receiveBoard = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
});
