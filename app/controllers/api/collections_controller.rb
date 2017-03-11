class Api::CollectionsController < ApplicationController
  def show
    @collection = Collection.find params[:id]
    render json: @collection
  end

  def index
    @collections = Collections.all.order('created_at desc')
    render json: @collections
  end
end
