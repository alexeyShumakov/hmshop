class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.string :title, null: false
      t.string :slug, null: false
      t.index :slug, unique: true
      t.attachment :icon

      t.timestamps
    end
  end
end
