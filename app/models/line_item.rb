class LineItem < ApplicationRecord
  belongs_to :product
  belongs_to :cart
  belongs_to :order

  validates :price, numericality: {greater_than_or_equal_to: 0}
  validates :count, numericality: {greater_than_or_equal_to: 1}

  def total_price
    count * product.price
  end

  def order_total_price
    count * price
  end
end
