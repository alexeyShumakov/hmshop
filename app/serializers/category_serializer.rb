class CategorySerializer < ActiveModel::Serializer
  attributes :id, :title, :ancestors, :root_category_id

  def ancestors
    object.ancestors.reverse.map { |c| {id: c.id, title: c.title} }
  end

  has_many :products do
    Product.includes(:pictures).where(category_id: object.self_and_descendant_ids)
  end

  class ProductSerializer < ActiveModel::Serializer
    attributes :id, :title, :thumb_cover, :price
    has_one :category
  end
end
