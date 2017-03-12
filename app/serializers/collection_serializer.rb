class CollectionSerializer < ActiveModel::Serializer
  class ProductSerializer < ActiveModel::Serializer
    attributes :id, :title, :thumb_cover, :price
  end
  attributes :id, :title, :cover, :total_price, :description

  has_many :products
  def cover
    object.cover(:medium)
  end
end
