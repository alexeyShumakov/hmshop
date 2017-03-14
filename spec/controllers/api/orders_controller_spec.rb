require 'rails_helper'

RSpec.describe Api::OrdersController, type: :controller do

  describe "GET #create" do
    let(:cart) { create :cart }
    let!(:product) { create :product, price: 9.99 }
    let!(:line_item_1) { create :line_item, count: 2, cart: cart, product: product }
    let!(:line_item_2) { create :line_item, cart: cart }
    let(:valid_attrs) { attributes_for :order }
    let(:invalid_attrs) { attributes_for :invalid_order }

    describe 'with valid params' do
      it "create order" do
        request.cookies['cart_id'] = cart.id
        expect {
          post :create, params: {order: valid_attrs}
        }.to change{ Order.count }.by(1)
      end

      it "set line_items from cart to order" do
        request.cookies['cart_id'] = cart.id
        post :create, params: {order: valid_attrs}
        expect(assigns(:order).line_items.size).to eq(2)
      end
    end

    describe 'with invalid params' do
      it 'return unprocessable_entity if cart empty' do
        request.cookies['cart_id'] = nil
        post :create, params: {order: valid_attrs}
        expect(response.status).to eq(422)
      end

      it 'return unprocessable_entity if params invalid' do
        request.cookies['cart_id'] = cart.id
        post :create, params: {order: invalid_attrs}
        expect(response.status).to eq(422)
      end
    end
  end

end
