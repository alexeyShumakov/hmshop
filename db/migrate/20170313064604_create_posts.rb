class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :slug, null: false
      t.index :slug, unique: true
      t.text :preview
      t.text :body
      t.text :raw_body
      t.attachment :cover

      t.timestamps
    end
  end
end
