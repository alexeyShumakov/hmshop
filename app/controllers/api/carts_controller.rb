class Api::CartsController < ApplicationController
  include CartsHelper
  before_action :set_cart
  def show
    render json: @cart
  end
end
