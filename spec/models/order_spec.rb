require 'rails_helper'

RSpec.describe Order, type: :model do
  describe '#set_line_items' do
    let(:cart) { create :cart }
    let(:order) { create :order }
    let!(:product) { create :product, price: 9.99 }
    let!(:line_item_1) { create :line_item, count: 2, cart: cart, product: product }
    let!(:line_item_2) { create :line_item, cart: cart }

    it 'remove line_items from cart' do
      order.set_line_items(cart.line_items)
      cart.reload
      expect(cart.line_items.size).to eq(0)
    end

    it 'add line_item to order' do
      order.set_line_items(cart.line_items)
      order.reload
      expect(order.line_items.size).to eq(2)
    end

    it 'set price to line_item from product' do
      order.set_line_items(cart.line_items)
      order.reload
      line_item_1.reload
      expect(order.line_items.first.price).to eq(line_item_1.price)
      expect(order.line_items.first.price).to eq(9.99)
    end
  end

  describe '#total_price' do
    let(:order) { create :order }
    let!(:line_item_1) { create :line_item, count: 2, price: 9.99, order: order }
    let!(:line_item_2) { create :line_item, count: 1, price: 9.99, order: order }

    it 'return fixed total price' do
      expect(order.total_price).to eq(9.99 * 3)
    end
  end
end
