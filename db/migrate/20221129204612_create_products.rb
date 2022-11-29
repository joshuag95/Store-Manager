class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.integer :inventory
      t.string :category
      t.integer :store_id

      t.timestamps
    end
  end
end
