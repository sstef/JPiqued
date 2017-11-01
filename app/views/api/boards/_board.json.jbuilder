json.id board.id
json.name board.name
json.description board.description
json.pins board.pins, partial: 'api/pins/pin', as: :pin
json.creator do
  json.id board.creator_id
  json.name board.user.name
  json.avatar_url asset_path(board.user.avatar.url(:thumb))
end
json.description board.description
json.category board.category
json.secret board.secret
