require 'rails_helper'

RSpec.describe Api::ProductsController, type: :controller do

  let(:picture) { create :picture }
  let!(:product) { create :product, title:'foo', pictures: [picture] }

  describe "GET #show" do
    it "returns http success" do
      get :show, params: {id: product.id}
      expect(response).to have_http_status(:success)
    end
    it 'assigns product' do
      get :show, params: {id: product.id}
      expect(assigns(:data).product).to eq(product)
    end
  end

  describe "GET #search" do
    it 'return products by title' do
      get :search, params: {keyword: 'fo' }
      expect(assigns(:products)).to eq([product])
    end
  end

end
