class CategorySerializer < ActiveModel::Serializer
  attributes :id, :title, :root_category_id
  has_many :products

  class ProductSerializer < ActiveModel::Serializer
    attributes :id, :title, :thumb_cover, :price
    has_one :category
  end
end
