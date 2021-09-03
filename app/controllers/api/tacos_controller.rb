class Api::TacosController < ApplicationController

  def index
    render json: Taco.all
  end

  
end
