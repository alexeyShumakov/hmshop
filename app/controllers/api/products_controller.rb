class Api::ProductsController < ApplicationController
  def show
    @product = Product.includes(:pictures, :category).find(params[:id])
    render json: @product, fields: [:id, :price, :title, :description]
  end
end
