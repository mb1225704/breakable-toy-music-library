class Api::V1::SongsController < ApiController 
    require 'rspotify'

    RSpotify.authenticate("1e73faa1a1ba43ff90e3e0ee26bac404", "14da57decbc944169ad971b54e6fb8ac")
    # RSpotify.raw_response = true



    def index
        render json: Song.all, include: ['artist.artist_name', 'technqiue.technique_name']
        # binding.pry
        
    end

    def create
        # binding.pry

        # # 1 - grab existing songs in the DB that match that song name 
        # songs = Song.where("name ILIKE ?", "%#{params['search_string']}%")
        # songs_from_spotify = RSpotify::Track.search(params[:song_name]) 
        # render json: { songs: songs, songs_from_spotify: songs_from_spotify}

        # on the search results page, display in a list the songs from your DB, and then below that from spotify 
            # if they click on a song that already exists in your app, then just send them to the song show page 
            # for spotify songs, there should be a button "Add Song to Guitar Builder", that when clicked:
                # makes a POST request to persist that song using the data from Spotify 
                # then redirects to the Song show page

        # make a migration to add an `spotify_id` to the songs table 







        #song = RSpotify::Track.search(song_params[:name]).first
        artist = Artist.find_or_create_by(artist_name: params["artists"][0]["name"])
        song = Song.new(name: params["song"]["name"], album_name: params["album"]["name"])
        song.artist = artist

            if song.save
                render json: song
            else
                render json: { errors: song.errors.full_messages }
            end
    end

    def spotify_search
        songs = RSpotify::Track.search(params[:song_name]) 
        # binding.pry
        render json: songs, adapter: nil
    end

    def search
        # binding.pry
        # params[:search]
        songs = Song.where("name ILIKE ?", "%#{params['search_string']}%")
        render json: songs
    end

    def show
        song = Song.find(params[:id])
        # song = RSpotify::Track.search(params[:song_name])
        render json: song
    end

    private

    def song_params
        params.require(:song).permit(:name, :album_name, :artist_name, :technique_name)
    end
end