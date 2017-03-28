require 'rails_helper'

RSpec.describe CategoriesController, type: :controller do

  let!(:shop) { create :shop }
  let!(:category) { create :category }
  describe 'GET #show' do
    it 'assigns category' do
      get :show, params: {id: category.id}
      expect(assigns(:category)).to eq(category)
    end
  end

  describe 'GET #index' do
    let!(:posts) { create_list(:post, 3) }
    let(:picture) { create :picture }
    let!(:banners) { create_list(:banner, 5) }
    let(:product) { create :product, pictures: [picture] }
    let!(:collections) {create_list(:collection, 3, products: [product])}
    let!(:newest_products) {create_list(:product, 5, pictures:[picture])}

    it 'assigns last 3 posts' do
      get :index
      expect(assigns(:posts)).to eq(posts.reverse)
    end

    it 'assigns last 3 collections' do
      get :index
      expect(assigns(:collections)).to eq(collections.reverse)
    end

    it 'assigns all banners' do
      get :index
      expect(assigns(:banners)).to eq(banners.reverse)
    end

    it 'assigns last 5 products' do
      get :index
      expect(assigns(:newest).products).to eq(newest_products.reverse)
    end
  end

end
