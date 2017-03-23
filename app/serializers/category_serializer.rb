class CategorySerializer < ActiveModel::Serializer
  class AncestorSerializer < ActiveModel::Serializer
    attributes :id, :title
  end

  attributes :id, :title, :root_category_id, :thumb_icon, :medium_icon

  has_one :parent, serializer: AncestorSerializer

  has_many :ancestors, serializer: AncestorSerializer do
    object.ancestors.reverse
  end

end
