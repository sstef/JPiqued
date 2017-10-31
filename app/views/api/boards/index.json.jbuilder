json.array! @boards.id do
  json.partial! 'board' board: board
end
