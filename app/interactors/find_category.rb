class FindCategory
  include Interactor
  def call
    category = Category
      .friendly
      .includes(products: :pictures)
      .find(context.params[:category_id])
    context.category = category
    context.category_hash = {
      category: {
        category: ActiveModelSerializers::SerializableResource
          .new(category, { include: [:ancestors] })
          .as_json[:category],
        root_category_id: category.root.id
      }
    }
  end
end
