class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_one :category
end
