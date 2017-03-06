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
    category = Category.includes(products: :pictures).find(params[:id])
    category_json = {}
    category_json['category'] = ActiveModelSerializers::SerializableResource.new(category, { include: '' }).as_json
    category_json['category']['root_category_id'] = category.root.id
    products_json = ActiveModelSerializers::SerializableResource.new(category.products, { include: '', fields: [:thumb_cover, :id, :title, :price] }).as_json
    @json = [category_json, products_json].inject(&:merge).to_json
  end
end
