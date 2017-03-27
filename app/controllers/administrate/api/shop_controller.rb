class Administrate::Api::ShopController < ApplicationController
  before_action :set_shop
  def show
    render json: @shop
  end

  def update
    if @shop.update(shop_params)
      render json: @shop
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  private

  def set_shop
    @shop = Shop.first
  end

  def shop_params
    params.require(:shop).permit(:title, :card_number, :email, :left_logo)
  end
end
