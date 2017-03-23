class FindProducts
  include Interactor
  def call
    products = Product
      .includes(:pictures)
      .where(category_id: context.category.self_and_descendant_ids)
      .order(context.order_rule)
      .page(context.params[:page])
      .per(12)

    context.products = products
    context.products_hash = ActiveModelSerializers::SerializableResource
      .new(products, { include: '', fields: [:thumb_cover, :id, :slug, :title, :price] })
      .as_json
  end
end
