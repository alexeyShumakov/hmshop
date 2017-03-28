require 'rails_helper'

RSpec.describe CollectionsController, type: :controller do

  let!(:shop) { create :shop }
  let(:picture) { create :picture }
  let(:product) { create :product, pictures: [picture] }
  let!(:collection) { create :collection , products: [product]}
  describe "GET #show" do
    it "returns http success" do
      get :show, params: {id: collection.id}
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

end
