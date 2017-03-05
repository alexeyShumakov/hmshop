class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :count, :total_price
  has_one :product
end
