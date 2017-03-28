FactoryGirl.define do
  factory :picture do
    image {File.open(Rails.root.join('spec', 'support', 'images', 'banner_1.jpg'))}
  end
end
