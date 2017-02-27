4.times do
  category = Category.create title: Faker::Commerce.department(2, true)
  3.times { category.children.create(title: Faker::Commerce.department(2, true)) }
end

Category.all.each do |c|
  6.times do
    pictures = []
    pictures << Picture.create(image: File.open(Rails.root.join('spec', 'support', 'images', 'product.jpg')))
    pictures << Picture.create(image: File.open(Rails.root.join('spec', 'support', 'images', 'product_1.jpg')))
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

product = Product.first
pictures = []
10.times do
  pictures << Picture.create(image: File.open(Rails.root.join('spec', 'support', 'images', 'product.jpg')))
  pictures << Picture.create(image: File.open(Rails.root.join('spec', 'support', 'images', 'product_1.jpg')))
end
product.pictures = pictures
