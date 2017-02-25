class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.references :category, foreign_key: true
      t.string :title
      t.text :description
      t.decimal :price, precision: 14, scale: 2

      t.timestamps
    end
  end
end
