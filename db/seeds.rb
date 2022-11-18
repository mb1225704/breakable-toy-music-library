# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artist_1 = Artist.create(artist_name: "Metallica")
artist_2 = Artist.create(artist_name: "Post Malone")
artist_3 = Artist.create(artist_name: "Black Sabbath")
artist_4 = Artist.create(artist_name: "Queen")
artist_5 = Artist.create(artist_name: "Led Zeppelin")
artist_6 = Artist.create(artist_name: "Lenny Kravitz")

song_1 = Song.create(name: "Wherever I May Roam", album_name: "Metallica", artist: artist_1)
song_2 = Song.create(name: "Feeling Whitney", album_name: "Stoney", artist: artist_2)
song_3 = Song.create(name: "War Pigs", album_name: "Paranoid", artist: artist_3)
song_4 = Song.create(name: "Killer Queen", album_name: "Sheer Heart Attack", artist: artist_4)
song_5 = Song.create(name: "Immigrant Song", album_name: "Led Zeppelin III", artist: artist_5)
song_6 = Song.create(name: "Always on the run", album_name: "Mama Said", artist: artist_6)