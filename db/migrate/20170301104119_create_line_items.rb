class CreateLineItems < ActiveRecord::Migration[5.0]
  def change
    create_table :line_items do |t|
      t.references :product, foreign_key: true
      t.references :cart, foreign_key: true
      t.decimal :price, precision: 14, scale: 2, defult: 0
      t.integer :count, default: 1, null: false

      t.timestamps
    end
  end
end
