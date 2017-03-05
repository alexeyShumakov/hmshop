class Api::CartsController < ApplicationController
  include CartsHelper
  before_action :set_cart
  def show
    render json: @cart, include: { line_items: :product }
  end
end
