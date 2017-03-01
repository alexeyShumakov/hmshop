class Api::LineItemsController < ApplicationController
  include CartsHelper
  before_action :set_cart

  def create
    product = Product.find(params[:product_id])
    line_item = @cart.line_items.find_by product: product
    if line_item
      line_item.count += 1
      line_item.save
    else
      line_item = LineItem.create cart: @cart, product: product
    end
    render json: {count: line_item.count }
  end
end
