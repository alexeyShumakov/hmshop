class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.string :title
      t.attachment :icon

      t.timestamps
    end
  end
end
