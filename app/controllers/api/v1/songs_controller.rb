class Api::V1::SongsController < ApiController 
    def index
        # binding.pry
        render json: Song.all
    end
end