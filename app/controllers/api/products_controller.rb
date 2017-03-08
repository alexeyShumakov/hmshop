class Api::ProductsController < ApplicationController
  include CartsHelper
  include HistoryHelper
  before_action :set_cart, only: [:show]

  def show
    @product = Product.includes(:pictures, :category).find(params[:id])
    add_to_history(@cart, @product)
    history_products = get_history_products(@cart)
    @json = {}
    @json[:history_item] = serialize_history_products(history_products).as_json[:history]
    @json[:product] = ActiveModelSerializers::SerializableResource.new(@product).as_json[:product]
    render json: @json
  end

  def search
    @products = Product.search_by_title(params[:keyword]).limit 10
    render json: @products, fields: [:id, :title], include: ''
  end
end
