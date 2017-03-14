class Order < ApplicationRecord
  has_many :line_items
  validates :name, :address, :email, :phone, presence: true

  def set_line_items(line_items)
    line_items.each do |item|
      item.cart = nil
      item.price = item.product.price
      item.order = self
      item.save
    end
  end

  def total_price
    line_items.to_a.sum(&:order_total_price)
  end
end
