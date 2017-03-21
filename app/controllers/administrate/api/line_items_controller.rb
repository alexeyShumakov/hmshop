class Administrate::Api::LineItemsController < ApplicationController
  before_action :set_line_item, only: [:destroy, :update]

  def create
    order = Order.find line_item_params[:order_id]
    product = Product.find(line_item_params[:product_id])
    @line_item = order.line_items.find_by(product: product)
    if @line_item.present?
      @line_item.count = @line_item.count + 1
      @line_item.save
    else
      li_params = line_item_params.merge({price: product.price})
      @line_item = LineItem.create li_params
    end
    render json: @line_item
  end

  def destroy
    @line_item.destroy
    render json: {status: :ok}
  end

  def update
    if @line_item.update(line_item_params)
      render json: @line_item
    else
      render json: @line_item.errors, status: :unprocessable_entity
    end
  end

  private

  def set_line_item
    @line_item = LineItem.find params[:id]
  end

  def line_item_params
    params.require(:line_item).permit(:order_id, :product_id, :count)
  end
end
