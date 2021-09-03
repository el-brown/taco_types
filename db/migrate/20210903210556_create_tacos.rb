class CreateTacos < ActiveRecord::Migration[6.1]
  def change
    create_table :tacos do |t|
      t.string :name
      t.string :ingredients
      t.integer :likes

      t.timestamps
    end
  end
end
