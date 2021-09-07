class Api::TacosController < ApplicationController

  def index
    tacos = Taco.all
    render json: tacos
  end

  def create
    taco = Taco.new(taco_params)
    taco.likes = 0
    if (taco.save)
      render json: taco
    else
      render json: {errors: item.errors}, status: :unprocessable_entity
    end
  end

  def update
    @taco = Taco.find(params[:id])
    if (@taco.update(taco_params))
      render json: @taco
    else
      render json: {errors: duck.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @taco = Taco.find(params[:id])
    render json: @taco.destroy
  end


  private

  def taco_params
    params.require(:taco).permit(:name, :ingredients)
  end

end
