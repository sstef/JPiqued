json.id pin.id
json.description pin.description
json.keywords pin.keywords
json.link_url pin.link_url
json.title pin.title
json.image_url pin.image.url(:original)
json.category pin.board.category
json.creator pin.user.name
json.creator_id pin.creator_id
json.board do
    json.id pin.board_id
    json.name pin.board.name
    json.creator pin.user.name
    json.creator_id pin.creator_id
    json.pins pin.board.pins
end
