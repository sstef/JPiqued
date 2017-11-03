# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke.', movie: movies.first)


CATEGORIES = [
    'Home', 'Electronics', 'Fashion',
    'Crafts', 'Animals', 'Architecture',
    'Art', 'Car', 'Cars and motorcycles',
    'Design', 'Entertainment', 'Food and drink',
    'Travel', 'Science and nature', 'Technology',
    'Hobbies', 'Health and fitness', 'Hair and beauty',
    'Motivational', 'Entertainment', 'Sports',
    'Kids and parenting', 'Humor', 'Holidays',
    'Tattoos', 'Sports', 'Holiday and events'
  ]

IMAGES = [
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/archer.jpeg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/bobs.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/cat.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/cat.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/drogon.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/drogon.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/earth.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/drogon.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/goku.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/homer.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/missing_image.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/monkey.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/piggie.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/poopybutthole.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/stewie.jpg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/totoro.jpeg',
    'https://s3.us-east-2.amazonaws.com/jpiqued-seeds/seeds/zoidberg.jpg'
]

User.destroy_all
User.create!(name: "Demo User", email: "guest@guest.com", password: "password")
5.times do
  User.create!(
    name: Faker::HarryPotter.character,
    email: Faker::Internet.email(Faker::DragonBall.unique.character),
    password: 'password'
  )
end


Board.destroy_all

30.times do
  Board.create!(
    name: Faker::HowIMetYourMother.character,
    description: Faker::MostInterestingManInTheWorld.quote,
    creator_id: User.all.sample.id,
    category: CATEGORIES.sample
  )
end

Pin.destroy_all

90.times do
  creator = User.all.sample.id
  Pin.create!(
    title: Faker::HowIMetYourMother.catch_phrase,
    creator_id: creator,
    board_id: User.find_by_id(creator).boards.sample.id,
    link_url: Faker::Internet.url,
    description: Faker::TheFreshPrinceOfBelAir.quote,
    image: IMAGES.sample
    )
end

10.times do
  User.all.each do |user|
    user.boards.each do |board|
      board.update_attribute(:pin_ids, 5.times.collect { Pin.all.sample.id } )
    end
  end
end
