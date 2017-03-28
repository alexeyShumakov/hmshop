FactoryGirl.define do
  factory :collection do
    title "MyString"
    description "MyString"
    cover {File.open(Rails.root.join('spec', 'support', 'images', 'banner_1.jpg'))}
  end
end
