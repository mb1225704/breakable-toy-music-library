class Api::V1::TechniquesController < ApiController
    def show
        # render json: Technique.find(params["song_id"])
    end

    def create
    
        new_technique = Technique.new(technique_name: params["technique_name"])
        new_technique.song = Song.find(params["song_id"])
        if new_technique.save
            render json: new_technique
        else 
            render json: {errors: review.errors.full_messages}, status: 401
        end
    end

end