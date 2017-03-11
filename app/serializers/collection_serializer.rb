class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :cover

  def cover
    object.cover(:medium)
  end
end
