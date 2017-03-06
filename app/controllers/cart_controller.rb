class CartController < ApplicationController
  include ApplicationHelper
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart, :set_shared_variables
  def index
    cart_json = ActiveModelSerializers::SerializableResource.new(@cart, { include: { line_items: { product: :pictures } } }).as_json
    @json = {
      cart: {
        cart: cart_json[:cart],
        currentPosition: 0
      }
    }.to_json
  end
end
