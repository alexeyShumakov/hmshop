FactoryGirl.define do
  factory :order do
    email "MyString"
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
