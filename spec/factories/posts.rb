FactoryGirl.define do
  factory :post do
    title "MyString"
    preview "MyString"
    body "MyString"
    cover {File.open(Rails.root.join('spec', 'support', 'images', 'banner_1.jpg'))}
  end
end
