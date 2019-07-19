class Api::AcheiversController < ApplicationController
    before_action :set_acheiver, only: [:show, :update, :destroy]

    def index
        render json: Acheiver.all
    end

    def create
        acheiver = Acheiver.new(acheiver_params)
        if acheiver.save
            render json: acheiver
        else
            render json: { message: acheiver.errors }, status: 400
        end
    end

    def show
        render json: @acheiver
    end

    def update
        if @acheiver.update
            render json: @acheiver
        else
            render json: { message: @acheiver.errors }, status: 400
        end
    end

    def destroy
        if @acheiver.destroy
            render status: 204
        else
            render json: { message: "Unable to remove this acheiver"}, status: 400
        end
    end


    private

    def set_acheiver
        @acheiver = Acheiver.find_by(id: params[:id])
    end

    def acheiver_params
        params.require(:acheiver).permit(:name, :points_earned)
    end


end