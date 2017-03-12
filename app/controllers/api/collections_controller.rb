class Api::CollectionsController < ApplicationController
  def show
    @collection = Collection.includes(products: :pictures).find params[:id]
    render json: @collection
  end

  def index
    @collections = Collection.includes(products: :pictures).all.order('created_at desc')
    render json: @collections
  end
end
