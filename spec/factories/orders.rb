FactoryGirl.define do
  factory :order do
    email "MyString@mail.net"
    address "MyString"
    phone "MyString"
    name "MyString"

    factory :invalid_order do
      email ""
      address ""
      phone ""
      name ""
    end
  end
end
