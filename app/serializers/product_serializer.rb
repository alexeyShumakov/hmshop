class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumb_cover, :price, :description
  has_one :category
  has_one :pictures
end
