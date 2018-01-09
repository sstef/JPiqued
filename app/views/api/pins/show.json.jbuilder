json.set! @pin.id do
  json.partial! 'pin', pin: @pin
end
json.comments @pin.comments, partial: 'api/comments/comment.json.jbuilder', as: :comment
