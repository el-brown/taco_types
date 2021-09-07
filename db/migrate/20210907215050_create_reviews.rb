class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :name
      t.text :review
      t.belongs_to :taco, null: false, foreign_key: true

      t.timestamps
    end
  end
end
