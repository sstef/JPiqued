json.id pin.id
json.description pin.description
json.creator_id pin.creator_id
json.creator pin.user.name
json.keywords pin.keywords
json.link_url pin.link_url
json.title pin.title
json.image_url asset_path(pin.image.url(:original))

if pin.board
  json.board do
    json.id pin.board_id
    json.name pin.board.name
    json.creator pin.user.name
    json.creator_id pin.creator_id
  end
else
  json.board({})
end
