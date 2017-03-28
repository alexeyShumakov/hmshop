require 'rails_helper'

RSpec.describe Api::PostsController, type: :controller do

  let!(:post_model) { create :post }

  describe "GET #show" do
    it "returns http success" do
      get :show, params: {id: post_model.id}
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
