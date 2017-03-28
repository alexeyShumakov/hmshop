FactoryGirl.define do
  factory :banner do
    url "MyString"
    image {File.open(Rails.root.join('spec', 'support', 'images', 'banner_1.jpg'))}
  end
end
