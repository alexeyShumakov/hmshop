require 'rails_helper'

RSpec.describe ProductsController, type: :controller do
  let!(:shop) { create :shop }
  let(:picture) { create :picture }
  let(:product) { create :product, pictures: [picture] }
  describe 'GET #show' do
    it 'assigns product' do
      get :show, params: {id: product.id}
      expect(assigns(:product)).to eq(product)
    end
  end
end
