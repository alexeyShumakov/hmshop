Admin.create(email: 'admin@shop.com', password: 'password')
6.times do
  Post.create({
    title: Faker::Commerce.product_name,
    preview: Faker::Hipster.sentence,
    body: Faker::Hipster.paragraph(5),
    cover: File.open(Rails.root.join('spec', 'support', 'images', 'banner_2.jpg'))
  })
end

4.times do
  category = Category.create title: Faker::Commerce.department(2, true)
  3.times { category.children.create(title: Faker::Commerce.department(2, true)) }
end

['banner_1.jpg', 'banner_2.jpg'].each do |img|
  Banner.create image: File.open(Rails.root.join('spec', 'support', 'images', img)), url: '/'
end

Category.all.each do |c|
  6.times do
    pictures = []
    ['product.jpg', 'product_1.jpg'].each do |img|
      pictures << Picture.create(image: File.open(Rails.root.join('spec', 'support', 'images', img)))
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

product = Product.first
pictures = []
3.times do
  ['product.jpg', 'product_1.jpg'].each do |img|
    pictures << Picture.create(image: File.open(Rails.root.join('spec', 'support', 'images', img)))
  end
end
product.pictures = pictures

6.times do
  c = Collection.create({
    title: Faker::Commerce.product_name,
    description: Faker::Hipster.paragraph,
    cover: File.open(Rails.root.join('spec', 'support', 'images', 'banner_1.jpg'))
  })

  (1 + Random.rand(4)).times do
    c.products << Product.all.order('random()').first
  end
end
