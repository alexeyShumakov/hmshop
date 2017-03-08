class ProductSerializer < ActiveModel::Serializer
  class SimilarSerializer < ActiveModel::Serializer
    attributes :id, :title, :thumb_cover
  end

  class AncestorSerializer < ActiveModel::Serializer
    attributes :id, :title
  end

  attributes :id, :title, :thumb_cover, :price, :description
  has_one :category
  has_one :pictures
  has_many :similar, serializer: SimilarSerializer
  has_many :ancestors, serializer: AncestorSerializer
end
