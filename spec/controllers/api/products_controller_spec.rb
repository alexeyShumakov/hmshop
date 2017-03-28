require 'rails_helper'

RSpec.describe Api::ProductsController, type: :controller do

  let(:picture) { create :picture }
  let(:product) { create :product, pictures: [picture] }

  describe "GET #show" do
    it "returns http success" do
      get :show, params: {id: product.id}
      expect(response).to have_http_status(:success)
    end
  end

end
