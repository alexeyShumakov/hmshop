FactoryGirl.define do
  factory :line_item do
    price 0
    product
    cart
  end
end
