class Administrate::Api::CollectionsController < Administrate::BaseController
  before_action :find_collection, only: [:show, :destroy, :update]

  def index
    @collections = Collection.includes(products: :pictures).all
    render json: @collections
  end

  def show
    render json: @collection
  end

  def destroy
    @collection.destroy
    render json: {status: :ok}, status: 204
  end

  def create
    @collection = Collection.new(collection_params)
    if @collection.save
      render json: @collection
    else
      render json: @collection.errors, status: :unprocessable_entity
    end
  end

  def update
    if @collection.update(collection_params)
      render json: @collection
    else
      render json: @collection.errors, status: :unprocessable_entity
    end
  end

  private

  def find_collection
    @collection = Collection.includes(products: :pictures).find params[:id]
  end

  def collection_params
    products = Product.where id: params[:product_ids]
    params.require(:collection)
      .permit(:title, :description, :cover)
      .merge({products: products})
  end
end
