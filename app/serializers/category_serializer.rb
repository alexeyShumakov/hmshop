class CategorySerializer < ActiveModel::Serializer
  class AncestorSerializer < ActiveModel::Serializer
    attributes :id, :title
  end

  class ProductSerializer < ActiveModel::Serializer
    attributes :id, :title, :thumb_cover, :price
    has_one :category
  end

  attributes :id, :title,:root_category_id

  has_many :ancestors, serializer: AncestorSerializer do
    object.ancestors.reverse
  end

  has_many :products do
    Product.includes(:pictures, :category).where(category_id: object.self_and_descendant_ids)
  end

end
