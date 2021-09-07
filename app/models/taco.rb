class Taco < ApplicationRecord
  validates :name, :phrase, presence: true
end
