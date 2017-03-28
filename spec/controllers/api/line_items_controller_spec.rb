require 'rails_helper'

RSpec.describe Api::LineItemsController, type: :controller do
  let!(:cart) { create :cart }
  let(:picture) {create :picture}
  let!(:product_1) { create :product, pictures: [picture] }
  let!(:product_2) { create :product, pictures: [picture] }

  describe 'POST #create' do
    it 'create line_items from array of ids' do
      request.cookies['cart_id'] = cart.id
      expect {
        post :create, params: { product_id: [product_1.id, product_2.id] }
      }.to change{ LineItem.count }.by(2)
    end

    it 'add line items to cart' do
      request.cookies['cart_id'] = cart.id
      post :create, params: { product_id: [product_1.id, product_2.id] }
      cart.reload
      products = cart.line_items.map {|item| item.product }
      expect(products).to eq([product_2, product_1])
    end
  end

  describe 'PUT #update' do
    let!(:line_item) { create :line_item, product: product_1, cart: cart }
    it 'update count' do
      request.cookies['cart_id'] = cart.id
      put :update, params: {id: line_item.id, line_item: {count: 2}}
      line_item.reload
      expect(line_item.count).to eq(2)
    end
  end

  describe 'DELETE #destroy' do
    let!(:line_item) { create :line_item, product: product_1, cart: cart }
    it 'destroy line_item' do
      request.cookies[:cart_id] = cart.id
      expect {
        delete :destroy, params: {id: line_item.id}
      }.to change{LineItem.count}.by(-1)
    end
  end
end
