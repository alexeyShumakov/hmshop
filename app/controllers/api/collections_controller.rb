class Api::CollectionsController < ApplicationController
  def show
    @collection = Collection.includes(:products).find params[:id]
    render json: @collection
  end

  def index
    @collections = Collection.includes(:products).all.order('created_at desc')
    render json: @collections
  end
end
