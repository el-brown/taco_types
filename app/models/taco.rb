class Taco < ApplicationRecord
  has_many :reviews, dependent: :destroy
  validates :name, :ingredients, presence: true
end
