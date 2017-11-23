json.id board.id
json.name board.name
json.description board.description
json.pin_ids board.pin_ids
json.category board.category
json.creator do
  json.id board.creator_id
  json.name board.user.name
  json.pins board.user.pin_ids
  json.boards board.user.board_ids
  json.avatar_url asset_path(board.user.avatar.url(:thumb))
end
json.description board.description
json.secret board.secret

json.pins board.pins, partial: 'api/pins/pin.json.jbuilder', as: :pin
