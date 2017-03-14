class Api::OrdersController < ApplicationController
  include CartsHelper
  before_action :set_cart
  def create
    return render json: {stauts: 'empty cart'}, status: :unprocessable_entity if @cart.line_items.empty?
    @order = Order.new(order_params)
    if @order.save
      @order.set_line_items(@cart.line_items)
      render json: {status: :good}
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  private

  def order_params
    params.require(:order).permit(:phone, :email, :name, :address)
  end
end
