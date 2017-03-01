class CategoriesController < ApplicationController
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart

  def index
  end

  def show
    category = Category.includes(products: :pictures).find(params[:id])
    category_json = ActiveModelSerializers::SerializableResource.new(category, { include: '' }).as_json
    products_json = ActiveModelSerializers::SerializableResource.new(category.products, { include: '', fields: [:thumb_cover, :id, :title, :price] }).as_json
    root_category = { root_category_id: category.root.id }
    cart_json = { cart: { total_count: @cart.total_count } }
    @json = [category_json, products_json, root_category, cart_json].inject(&:merge).to_json
  end
end
