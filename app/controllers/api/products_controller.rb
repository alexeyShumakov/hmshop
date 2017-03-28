class Api::ProductsController < ApplicationController
  include CartsHelper
  before_action :set_cart, only: [:show]

  def show
    params[:product_id] = params[:id]
    @data = GenerateProduct.call({params: params, cart: @cart})
    @json = [@data.product_hash, @data.category_hash, @data.history_hash].inject(:merge).to_json
    render json: @json
  end

  def search
    @products = Product.search_by_title(params[:keyword]).limit 10
    render json: @products, fields: [:id, :title], include: ''
  end
end
