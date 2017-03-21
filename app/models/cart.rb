class Cart < ApplicationRecord
  has_many :line_items, -> { order 'created_at DESC' }, dependent: :destroy
  has_many :history_items, -> { order 'updated_at DESC' }, dependent: :destroy

  def total_count
    line_items.sum :count
  end

  def total_price
    line_items.to_a.sum(&:total_price)
  end
end
