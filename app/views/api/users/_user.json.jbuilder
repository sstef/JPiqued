json.user do
  json.name user.name
  json.avatar_url user.avatar.url(:large)
  json.pins user.pin_ids
  json.id user.id
  json.currentlyFollowing currentUser.currently_following(user.id)\\
  json.followers user.followers.keys.count
  json.following user.following.keys.count
end
json.pins user.pins, partial: 'api/pins/pin.json.jbuilder', as: :pin
json.boards user.boards, partial: 'api/boards/board.json.jbuilder', as: :board
