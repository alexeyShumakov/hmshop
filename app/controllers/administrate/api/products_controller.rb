class Administrate::Api::ProductsController < Administrate::ProductsController
  before_action :find_product, only: [:show, :destroy, :update]

  def index
    @products = Product.includes(:pictures).all.order(:id)
    render json: @products, include: '', fields: [:id, :title, :price, :thumb_cover]
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
    if @product.save
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def update
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
    params.require(:product).permit(:title)
  end
end
