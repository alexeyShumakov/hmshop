class FindProduct
  include Interactor
  def call
    product = Product.includes(:pictures, :category).find context.params[:product_id]
    hash = ActiveModelSerializers::SerializableResource.new(product).as_json
    context.params[:category_id] = product.category.id
    context.product = product
    context.product_hash = {
      fullProduct: {
        product: hash[:product],
        currentPicture: product.pictures.first.medium_img
      }
    }
  end
end
