class Api::ProductsController < ApplicationController
  def show
    @product = Product.includes(:pictures, :category).find(params[:id])
    render json: @product, fields: [:id, :price, :title, :description, :ancestors, :similar]
  end

  def search
    @products = Product.search_by_title(params[:keyword]).limit 10
    render json: @products, fields: [:id, :title], include: ''
  end
end
