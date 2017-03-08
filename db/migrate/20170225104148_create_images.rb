class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :pictures do |t|
      t.timestamps
    end

    create_table :pictures_products, id: false do |t|
      t.belongs_to :picture, index: true
      t.belongs_to :product, index: true
    end
  end
end
