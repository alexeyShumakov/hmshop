class CategoriesController < ApplicationController
  include ApplicationHelper
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart, :set_shared_variables

  def index
    @posts = Post.all.order('created_at DESC').limit(3)
    @banners = Banner.all.order('created_at DESC')
    @newest = NewestProducts.call
    @collections = Collection
      .includes(products: :pictures)
      .all
      .order('created_at DESC')
      .limit(3)

    @json = {
      home: {
        posts: ActiveModelSerializers::SerializableResource.new(@posts).as_json[:posts],
        collections: ActiveModelSerializers::SerializableResource
          .new(@collections)
          .as_json[:collections],
        banners: ActiveModelSerializers::SerializableResource.new(@banners, { include: '', adapter: :attributes }).as_json,
        newest: @newest.products_hash[:products],
      }
    }.to_json
  end

  def show
    params[:category_id] = params[:id]
    data = GenerateCategory.call({params: params})
    @category = data.category

    @json = [data.filters_hash, data.category_hash, data.products_hash]
      .inject(&:merge)
      .to_json
  end
end
