class CategorySerializer < ActiveModel::Serializer
  attributes :id, :title, :root_category_id
  has_many :products
end
