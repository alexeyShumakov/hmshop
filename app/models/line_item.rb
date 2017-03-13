class LineItem < ApplicationRecord
  belongs_to :product
  belongs_to :cart
  belongs_to :order

  def total_price
    count * product.price
  end

  def order_total_price
    count * price
  end
end
