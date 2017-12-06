json.id comment.idea
json.body comment.body
json.user do
  json.id comment.author.id
  json.avatar_url comment.author.image.url(:thumb)
  json.name comment.author.name
end
