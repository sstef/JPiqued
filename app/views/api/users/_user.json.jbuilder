json.name user.name
json.avatar_url user.avatar.url(:large)
json.boards user.boards
#json.pins user.pins
json.pins user.pins, partial: 'api/pins/pin.json.jbuilder', as: :pin
json.id user.id
