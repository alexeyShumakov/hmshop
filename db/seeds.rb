5.times do
  category = Category.create title: Faker::Hipster.word
  5.times { category.children.create(title: Faker::Hipster.word) }
end

Category.all.each do |c|
  8.times { Product.create(title: Faker::Hipster.word, category: c) }
end
