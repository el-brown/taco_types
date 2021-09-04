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
    taco = Taco.find(params[:id])
    taco.update(complete: !taco.complete)
    render json: taco
  end

  def destroy
    Taco.find(params[:id]).destroy
    render json: { message: "Taco deleted" }
  end


  private

  def taco_params
    params.require(:taco).permit(:name, :ingredients)
  end

end
