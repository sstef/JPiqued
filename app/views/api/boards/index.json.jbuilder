@boards.each do |board|
  json.set! board do
    json.partial! 'board', board: board
  end
end
