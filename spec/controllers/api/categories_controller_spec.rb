require 'rails_helper'

RSpec.describe Api::CategoriesController, type: :controller do

  describe "GET #show" do
    let(:category) { create :category }
    it "returns http success" do
      get :show, params: {id: category.id}
      expect(response).to have_http_status(:success)
    end

    it "assigns category" do
      get :show, params: {id: category.id}
      expect(assigns(:data).category).to eq(category)
    end
  end
end
