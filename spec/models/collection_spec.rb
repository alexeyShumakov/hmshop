require 'rails_helper'

RSpec.describe Collection, type: :model do
  let(:picture) { create :picture }
  let(:product) { create :product, pictures: [picture] }
  let(:picture_1) { create :picture }
  let(:product_1) { create :product, pictures: [picture_1] }
  let!(:collection) { create :collection , products: [product, product_1]}

  describe "#total_price" do
    it 'total_price return sum of product prices' do
      expect(collection.total_price).to eq(product.price + product_1.price)
    end
  end
end
