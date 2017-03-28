require 'rails_helper'

RSpec.describe Cart, type: :model do
  let(:picture) {create :picture}

  let(:product) { create :product, price: 9.99, pictures: [picture] }
  let(:product_1) { create :product, price: 5.99, pictures: [picture] }

  let(:line_item) { create :line_item, count: 2, product: product }
  let(:line_item_1) { create :line_item, count: 2, product: product_1 }
  let!(:cart) { create :cart, line_items: [line_item, line_item_1] }

  describe '#total_count' do
    it 'return correct total_count' do
      expect(cart.total_count).to eq(4)
    end
  end

  describe '#total_price' do
    it 'retrun correct total_price' do
      expect(cart.total_price).to eq(2*9.99 + 2*5.99)
    end
  end
end
