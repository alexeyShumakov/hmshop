class CategoriesController < ApplicationController
  include ApplicationHelper
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart, :set_shared_variables

  def index
  end

  def show
    category = Category.includes(products: :pictures).find(params[:id])
    category_json = ActiveModelSerializers::SerializableResource.new(category, { include: '' }).as_json
    products_json = ActiveModelSerializers::SerializableResource.new(category.products, { include: '', fields: [:thumb_cover, :id, :title, :price] }).as_json
    root_category = { root_category_id: category.root.id }
    @json = [category_json, products_json, root_category].inject(&:merge).to_json
  end
end
