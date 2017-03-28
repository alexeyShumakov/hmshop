require 'rails_helper'

RSpec.describe Api::CartsController, type: :controller do

  let!(:cart) { create :cart }
  describe "GET #show" do
    it "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end

    it "assigns cart" do
      request.cookies['cart_id'] = cart.id
      get :show
      expect(assigns(:cart)).to eq(cart)
    end
  end

end
