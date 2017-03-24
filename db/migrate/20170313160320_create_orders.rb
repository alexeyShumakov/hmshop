class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :email
      t.string :address
      t.string :phone
      t.string :name
      t.decimal :delivery_price, precision: 14, scale: 2, default: 0

      t.timestamps
    end
  end
end
