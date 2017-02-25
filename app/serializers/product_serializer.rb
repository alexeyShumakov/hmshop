class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumb_cover, :price
  has_one :category
end
