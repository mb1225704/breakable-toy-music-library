class Api::V1::SongsController < ApiController 
    def index
        render json: Song.all, include: ['artist.artist_name']
    end

    #with artist name use the name to grab the existing. this can be done in in the song
    def create
        artist_list = Artist.all

        if artist_list.find_by artist_name: params["artist_name"] 
                song = Song.create(song_params) 
                    if song.save
                        render json: song
                    else
                        render json: { errors: song.errors.full_messages }
                    end
                else
                    Artist.create(artist_name: params["artist_name"])
                    song = Song.create(song_params) 
                        if song.save
                            render json: song
                        else
                            render json: { errors: song.errors.full_messages }
                        end
                end 
    end

    def search
        @songs = Song.where("name ILIKE ?", "%#{params['search_string']}%")
        render json: @songs
      end

    private

    def song_params
        params.require(:song).permit(:name, :album_name, :artist_name)
    end
    # def artist_params
    #     params.require(:artist).permit(:artist_name)
    # end
end