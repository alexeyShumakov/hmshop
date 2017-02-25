4.times do
  category = Category.create title: Faker::Commerce.department(2, true)
  3.times { category.children.create(title: Faker::Commerce.department(2, true)) }
end

Category.all.each do |c|
  6.times do
    pictures = []
    2.times do
      pictures << Picture.create(image: File.open(Rails.root.join('spec', 'support', 'images', 'product.jpg')))
    end
    product_params = {
      title: Faker::Commerce.product_name,
      category: c,
      description: Faker::Hipster.paragraph,
      price: Faker::Commerce.price
    }
    product = Product.create(product_params)
    product.pictures = pictures
  end
end
