require 'rails_helper'

RSpec.describe LineItem, type: :model do
  let!(:cart) { create :cart }
  let(:picture) {create :picture}
  let!(:product) { create :product, price: 9.99, pictures: [picture] }
  let!(:line_item) { create :line_item, count: 2, price: 9.99, cart: cart, product: product }

  describe '#total_price' do
    it 'return correct total_price' do
      expect(line_item.total_price).to eq(9.99 * 2)
    end
  end

  describe '#order_total_price' do
    it 'return correct order_total_price' do
      expect(line_item.order_total_price).to eq(9.99 * 2)
    end
  end
end
