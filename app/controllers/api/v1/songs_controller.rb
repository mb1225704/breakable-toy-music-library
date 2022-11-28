class Api::V1::SongsController < ApiController 
    def index
        render json: Song.all, include: ['artist.artist_name']
    end

    def create
        # binding.pry
        song = Song.create(song_params)
        song.artist = Artist.find(params["artist_id"])
        if song.save
            render json: song
        else
            render json: { errors: song.errors.full_messages }
        end
    end

    private

    def song_params
        params.require(:song).permit(:name, :album_name, :artist_id)
    end
end