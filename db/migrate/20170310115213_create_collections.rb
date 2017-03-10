class CreateCollections < ActiveRecord::Migration[5.0]
  def change
    create_table :collections do |t|
      t.string :title
      t.string :description
      t.attachment :cover

      t.timestamps
    end

    create_table :collections_products, id: false do |t|
      t.belongs_to :collection, index: true
      t.belongs_to :product, index: true
    end
  end
end
