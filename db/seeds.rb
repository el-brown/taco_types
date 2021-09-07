# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

Taco.create(name: "Chicken Tacos", ingredients:"Corn tortillas, chicken, salsa", likes: 0)
Taco.create(name: "Soft Tacos", ingredients:"Flour tortillas, ground beef, olives, cheese, lettuce", likes: 0)
Taco.create(name: "Chili-lime Shrimp Tacos", ingredients:"Corn tortillas, shrimp, chili powder, lime juice", likes: 0)
Taco.create(name: "Carne Asada", ingredients:"Corn tortillas, carne asada, onions, cilantro", likes: 0)
Taco.create(name: "Veggie tacos", ingredients:"Hard taco shells, black beans, olives, lettuce, tomatoes, cheese, green salsa", likes: 0)
Taco.create(name: "Pork Tacos", ingredients:"Corn tortillas, pork, red cabbage, cilantro, crema", likes: 0)

10.times do
  Review.create(
    name:Faker::Name.name,
    review: Faker::TvShows::NewGirl.quote
    )
end