# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artist_1 = Artist.create(artist_name: "Metallica")
song_1 = Song.create(name: "Wherever I May Roam", album_name: "Metallica", artist_id: 1)