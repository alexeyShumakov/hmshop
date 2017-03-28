class ShopSerializer < ActiveModel::Serializer
  attributes :id, :title, :card_number, :email, :small_left_logo, :phone
end
