class CategoriesController < ApplicationController
  include ApplicationHelper
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart, :set_shared_variables

  def index
    @json = {
      home: {
        banners: ActiveModelSerializers::SerializableResource.new(Banner.all, { include: '', adapter: :attributes }).as_json
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
