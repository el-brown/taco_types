class Api::ReviewsController < ApplicationController

    def index
      reviews = Review.all
      render json: reviews
    end
  
    def create
      review = Review.new(review_params)
      review.likes = 0
      if (review.save)
        render json: review
      else
        render json: {errors: review.errors}, status: :unprocessable_entity
      end
    end
  
    def update
      @review = Review.find(params[:id])
      if (@review.update(review_params))
        render json: @review
      else
        render json: {errors: review.errors }, status: :unprocessable_entity
      end
    end
  
    def destroy
      @review = Review.find(params[:id])
      render json: @review.destroy
    end
  
  
    private
  
    def review_params
      params.require(:review).permit(:name, :ingredients)
    end
  
  end
  
end
