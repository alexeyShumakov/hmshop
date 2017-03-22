class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :preview
      t.text :body
      t.text :raw_body
      t.attachment :cover

      t.timestamps
    end
  end
end
