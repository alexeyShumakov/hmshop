class CollectionSerializer < ActiveModel::Serializer
  class ProductSerializer < ActiveModel::Serializer
    attributes :id, :title, :thumb_cover, :price
  end
  attributes :id, :title, :thumb_cover, :cover_medium, :total_price, :description, :slug

  has_many :products
  def cover_medium
    object.cover(:medium)
  end
end
