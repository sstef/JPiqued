json.name board.name
json.description board.description
json.pins board.pins, partial: 'api/pins/pin.json.jbuilder', as: :pin
json.creator_id board.creator_id
json.author board.user.name
