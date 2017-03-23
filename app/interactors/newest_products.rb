class NewestProducts
  include Interactor
  def call
    products = Product
      .includes(:pictures)
      .order('created_at DESC')
      .limit(5)

    context.products = products
    context.products_hash = ActiveModelSerializers::SerializableResource
      .new(products, { include: '', fields: [:thumb_cover, :slug, :id, :title, :price] })
      .as_json
  end
end
