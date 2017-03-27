class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.references :category, foreign_key: true
      t.string :title, null: false
      t.string :slug, null: false
      t.boolean :for_example, default: false
      t.index :slug, unique: true
      t.integer :line_items_count, default: 0
      t.text :description
      t.decimal :price, precision: 14, scale: 2, default: 0

      t.timestamps
    end
  end
end
