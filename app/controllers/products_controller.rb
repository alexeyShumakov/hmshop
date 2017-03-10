class ProductsController < ApplicationController
  include ApplicationHelper
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart, :set_shared_variables

  def show
    params[:product_id] = params[:id]
    data = GenerateProduct.call({params: params, cart: @cart})
    @product = data.product
    @json = [data.product_hash, data.category_hash, data.history_hash].inject(:merge).to_json
  end
end
