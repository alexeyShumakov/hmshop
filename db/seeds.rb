shop_data = {
  card_number: 1234,
  phone: '8 123 455 23 32',
  email: ENV['ADMIN_EMAIL'],
  title: 'My awesome shop!',
  left_logo: File.open(Rails.root.join('spec', 'support', 'images', 'product_1.jpg'))
}
Shop.create!(shop_data)
Admin.create(email: ENV['ADMIN_EMAIL'], password: ENV['ADMIN_PASSWORD'])
