require 'rails_helper'

RSpec.describe CartController, type: :controller do

  let!(:shop) { create :shop }
  let!(:cart) { create :cart }
  let(:picture) {create :picture}
  let!(:product) { create :product, price: 9.99, pictures: [picture] }
  let!(:line_item_1) { create :line_item, count: 2, cart: cart, product: product }
  let!(:line_item_2) { create :line_item, cart: cart, product: product }

  describe "GET #index" do
    it "returns http success" do
      request.cookies['cart_id'] = cart.id
      get :index
      expect(response).to have_http_status(:success)
    end
  end

end
