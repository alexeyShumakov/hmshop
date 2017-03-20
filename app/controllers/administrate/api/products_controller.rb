class Administrate::Api::ProductsController < Administrate::BaseController
  before_action :find_product, only: [:show, :destroy, :update]

  def index
    @products = Product.includes(:pictures).all.order(:id)
    render json: @products, include: '', fields: [:id, :title, :price, :thumb_cover]
  end


  def search
    @products = Product.includes(:pictures).search_by_title(params[:keyword]).limit 10
    render json: @products, fields: [:id, :title, :thumb_cover], include: ''
  end

  def show
    render json: @product, include: [:pictures, :category ]
  end

  def destroy
    @product.destroy
    render json: {status: :ok}, status: 204
  end

  def create
    @product = Product.new(product_params)
    @product.pictures = Picture.where(id: params[:picture_ids])
    if @product.save
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def update
    pictures = Picture.where(id: params[:picture_ids])
    @product.pictures = pictures if pictures.present?
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  private

  def find_product
    @product = Product.includes(:pictures, :category).find params[:id]
  end
  def product_params
    params.require(:product).permit(:title, :price, :description, :category_id)
  end
end
