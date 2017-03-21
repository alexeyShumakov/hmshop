class OrderSerializer < ActiveModel::Serializer
  class LineItemSerializer < ActiveModel::Serializer
    class ProductSerializer < ActiveModel::Serializer
      attributes :id, :title, :thumb_cover, :price
    end

    attributes :id, :count, :total_price, :price, :product_id, :order_id
    has_one :product

    def total_price
      object.order_total_price
    end
  end
  attributes :id, :address, :email, :name, :phone, :total_price
  has_many :line_items
end
