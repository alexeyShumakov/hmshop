class CategorySerializer < ActiveModel::Serializer
  class AncestorSerializer < ActiveModel::Serializer
    attributes :id, :title
  end

  attributes :id, :title, :root_category_id

  has_many :ancestors, serializer: AncestorSerializer do
    object.ancestors.reverse
  end

end
