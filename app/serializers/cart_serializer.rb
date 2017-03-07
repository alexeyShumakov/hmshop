class CartSerializer < ActiveModel::Serializer
  attributes :id, :total_count, :total_price
  has_many :line_items

  class LineItemSerializer < ActiveModel::Serializer
    attributes :id, :count, :total_price
    has_one :product

    class ProductSerializer < ActiveModel::Serializer
      attributes :id, :title, :thumb_cover, :price
    end
  end
end
