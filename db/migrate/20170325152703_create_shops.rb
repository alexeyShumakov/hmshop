class CreateShops < ActiveRecord::Migration[5.0]
  def change
    create_table :shops do |t|
      t.string :title
      t.string :card_number
      t.string :email
      t.attachment :left_logo
      t.attachment :middle_logo

      t.timestamps
    end
  end
end
