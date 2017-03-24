class Administrate::Api::OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy]

  def index
    @orders = Order.includes(line_items: :product).all.order('created_at DESC')
    render json: @orders, include: [], fields: [:total_price, :id, :name, :phone]
  end

  def show
    render json: @order, include: 'line_items.product'
  end

  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @order.destroy
    render json: {status: :ok}, status: 204
  end

  private

  def set_order
    @order = Order.includes(line_items: {product: :pictures}).find(params[:id])
  end

  def order_params
    params.require(:order).permit(:name, :address, :phone, :email, :delivery_price)
  end
end
