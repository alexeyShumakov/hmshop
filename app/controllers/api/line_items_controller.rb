class Api::LineItemsController < ApplicationController
  include CartsHelper
  before_action :set_cart
  before_action :set_line_item, only: [:destroy, :update]


  def create
    ids = Array(params[:product_id])
    products = Product.find(ids)
    products.each do |product|
      create_line_item(product)
    end
    render json: {status: :ok }
  end

  def update
    @line_item.update(line_item_params)
    render json: @cart.reload
  end

  def destroy
    @line_item.destroy
    render json: @cart.reload
  end

  private

  def set_line_item
    @line_item = @cart.line_items.find(params[:id])
  end

  def line_item_params
    params.require(:line_item).permit(:count)
  end

  def create_line_item(product)
    line_item = @cart.line_items.find_by product: product
    if line_item
      line_item.count += 1
      line_item.save
    else
      line_item = LineItem.create! cart: @cart, product: product
    end

  end
end
