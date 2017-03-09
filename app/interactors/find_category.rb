class FindCategory
  include Interactor
  def call
    category = Category.includes(products: :pictures).find(context.params[:id])
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
