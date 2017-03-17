class Administrate::ProductsController < Administrate::BaseController
  def index
    products = Product.includes(:pictures).all.order(:id)
    @json = {
      products: {
        fromServer: true,
        products: ActiveModelSerializers::SerializableResource
          .new(products, { include: '', fields: [:id, :price, :title, :thumb_cover], adapter: :attributes })
          .as_json,
      }
    }.to_json
  end

  def show
    product = Product.includes(:pictures, :category).find(params[:id])
    @json = {
      products: {
        fromServer: true,
        product: ActiveModelSerializers::SerializableResource
          .new(product, { include: [:category, :pictures]})
          .as_json[:product],
      }
    }.to_json
  end

  def new
    product_params = { title: '', price: 0, description: 0 }
    @json = {
      products: {
        fromServer: true,
        product: ActiveModelSerializers::SerializableResource
          .new(Product.new(product_params), { include: [:category, :pictures]})
          .as_json[:product],
      }
    }.to_json
  end

  def edit
    product = Product.includes(:pictures, :category).find(params[:id])
    @json = {
      products: {
        fromServer: true,
        product: ActiveModelSerializers::SerializableResource
          .new(product, { include: [:category, :pictures]})
          .as_json[:product],
      }
    }.to_json
  end
end
