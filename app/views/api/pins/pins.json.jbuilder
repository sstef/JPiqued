json.array! @pins do |pin|
  json.partial! 'api/pins/pin', pin: pin
end
