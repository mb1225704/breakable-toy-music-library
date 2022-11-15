class Api::V1::SongsController < ApiController 
    def show
        render json: Song.find(params[:id])
    end
end