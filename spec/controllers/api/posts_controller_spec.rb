require 'rails_helper'

RSpec.describe Api::PostsController, type: :controller do

  let!(:post_model) { create :post }

  describe "GET #show" do
    it "returns http success" do
      get :show, params: {id: post_model.id}
      expect(response).to have_http_status(:success)
    end
    it 'assigns post' do
      get :show, params: {id: post_model.id}
      expect(assigns(:post)).to eq(post_model)
    end
  end

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'assigns posts' do
      get :index
      expect(assigns(:posts)).to eq([post_model])
    end
  end

end
