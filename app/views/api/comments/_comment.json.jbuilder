json.id comment.id
json.body comment.body
json.user do
  json.id comment.author.id
  json.avatar_url comment.author.avatar.url(:thumb)
  json.name comment.author.name
end
