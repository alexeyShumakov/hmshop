class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumb_cover, :price, :description, :ancestors
  has_one :category
  has_one :pictures

  def ancestors
    object.category.self_and_ancestors.reverse.map { |c| {id: c.id, title: c.title} }
  end
end
