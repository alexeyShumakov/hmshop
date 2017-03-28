require 'rails_helper'

RSpec.describe PostsController, type: :controller do
  let!(:shop) { create :shop }
  let!(:post_model) { create :post }
  describe 'GET #show' do
    it 'assigns post' do
      get :show, params: {id: post_model.id}
      expect(assigns(:post)).to eq(post_model)
    end
  end

  describe 'GET #index' do
    it 'assigns posts' do
      get :index
      expect(assigns(:posts)).to eq([post_model])
    end
  end
end
