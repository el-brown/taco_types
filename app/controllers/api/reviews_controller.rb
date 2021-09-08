class Api::ReviewsController < ApplicationController
  before_action :set_taco
  before_action :set_recipe, only: [:update, :destroy]

    def index
      @reviews = Review.all
      render json: reviews
    end
  
    def create
      @review = @taco.review.new(review_params)
      review.likes = 0
      if (@review.save)
        render json: review
      else
        render json: {errors: review.errors}, status: :unprocessable_entity
      end
    end
  
    def update
      if (@review.update(review_params))
        render json: review
      else
        render json: {errors: review.errors }, status: :unprocessable_entity
      end
    end
  
    def destroy
      render json: @review.destroy
    end
  
  
    private
  
    def review_params
      params.require(:review).permit(:name, :ingredients)
    end

    def set_taco  
      @taco = Taco.find(params[:taco_id])
    end

    def set_recipe
      @recipe = @taco.recipe.find(params[:id])
    end


  
  end
  
end
