@pins do |pin|
  json.set!(pin.id) pin do |p|
    json.partial! 'api/pins/pin', pin: p
  end
end
