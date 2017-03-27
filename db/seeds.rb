shop_data = {
  card_number: 1234,
  email: 'shop@mail.com',
  title: 'My awesome shop!',
  left_logo: File.open(Rails.root.join('spec', 'support', 'images', 'product_1.jpg'))
}
Shop.create!(shop_data)
Admin.create(email: 'admin@shop.com', password: 'password')

4.times do
  category = Category.create({
    title: Faker::Commerce.department(2, true),
    icon: File.open(Rails.root.join('spec', 'support', 'images', 'product_1.jpg'))
  })
  3.times { category.children.create(title: Faker::Commerce.department(2, true)) }
end

['banner_1.jpg', 'banner_2.jpg'].each do |img|
  Banner.create image: File.open(Rails.root.join('spec', 'support', 'images', img)), url: '/'
end

Category.all.each do |c|
  12.times do
    pictures = []
    ['product.jpg', 'product_1.jpg'].each do |img|
      pictures << Picture.create(image: File.open(Rails.root.join('spec', 'support', 'images', img)))
    end
    product_params = {
      title: Faker::Commerce.product_name,
      category: c,
      description: Faker::Hipster.paragraph,
      price: Faker::Commerce.price,
      pictures: pictures
    }
    product = Product.create(product_params)
  end
end

6.times do
  products = []
  (1 + Random.rand(4)).times { products << Product.all.order('random()').first }
  c = Collection.create({
    title: Faker::Commerce.product_name,
    products: products,
    description: Faker::Hipster.paragraph,
    cover: File.open(Rails.root.join('spec', 'support', 'images', 'banner_1.jpg'))
  })

end
