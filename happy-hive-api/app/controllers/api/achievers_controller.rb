class Api::AchieversController < ApplicationController
    before_action :set_achiever, only: [:show, :update, :destroy]

    def index
        render json: Achiever.all
    end

    def create
        achiever = Achiever.new(achiever_params)
        if achiever.save
            render json: achiever
        else
            render json: { message: achiever.errors }, status: 400
        end
    end

    def show
        render json: @achiever
    end

    def update
        if @achiever.update
            render json: @achiever
        else
            render json: { message: @achiever.errors }, status: 400
        end
    end

    def destroy
        if @achiever.destroy
            render status: 204
        else
            render json: { message: "Unable to remove this achiever"}, status: 400
        end
    end


    private

    def set_achiever
        @achiever = Achiever.find_by(id: params[:id])
    end

    def achiever_params
        params.require(:achiever).permit(:name, :points_earned)
    end


end