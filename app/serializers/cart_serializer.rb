class CartSerializer < ActiveModel::Serializer

  class LineItemSerializer < ActiveModel::Serializer
    attributes :id, :count, :total_price
    has_one :product

    class ProductSerializer < ActiveModel::Serializer
      attributes :id, :title, :thumb_cover, :price
    end
  end

  attributes :id, :total_count, :total_price
  has_many :line_items
end
