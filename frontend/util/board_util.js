export const fetchBoards = () => (
  $.ajax({
    url: '/boards',
    method: 'GET'
  })
);

export const fetchBoard = id => (
  $.ajax({
    url: `/boards/${id}`,
    method: 'GET'
  })
);

export const createBoard = board => (
  $.ajax({
    url: `/boards/${board.id}`,
    method: 'POST',
    data: { board }
  })
);

export const updateBoard = board => (
  $.ajax({
    url: `/boards/${board.id}`,
    method: 'PATCH',
    data: { board }
  })
);


export const deleteBoard = boardId => (
  $.ajax({
    url: `/boards/${board.id}`,
    method: 'DELETE'
  })
);
