class ProductsController < ApplicationController
  include ApplicationHelper
  include CategoriesHelper
  include CartsHelper
  include HistoryHelper
  before_action :set_categories, :set_cart, :set_shared_variables

  def show
    add_to_history(@cart, @product)
    history_products = get_history_products(@cart)
    @product = Product.includes(:pictures, :category).find params[:id]
    category = @product.category
    json_category = ActiveModelSerializers::SerializableResource.new(category, { include: '' }).as_json
    json_product = ActiveModelSerializers::SerializableResource.new(@product).as_json
    @json = {
      history: serialize_history_products(history_products).as_json[:history],
      fullProduct: {
        product: json_product[:product],
        currentPicture: @product.pictures.first.medium_img
      },
      category: {
        category: json_category[:category],
        root_category_id: category.root.id
      }
    }.to_json
  end
end
