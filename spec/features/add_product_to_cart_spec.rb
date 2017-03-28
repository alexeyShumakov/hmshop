require 'rails_helper'

RSpec.feature "Add product to cart", js: true, type: :feature do
  let!(:cart) {create :cart}
  let!(:shop) {create :shop}
  let!(:picture) {create :picture}
  let!(:product) {create :product, price: 9.99, pictures: [picture]}

  scenario "User add product to cart" do
    visit "/products/#{product.slug}"
    click_button('Добавить в корзину')

    expect(page).to have_text('ПЕРЕЙТИ В КОРЗИНУ')
    expect(page).to have_css '.basket__counter b', text: '1'

    click_link('Перейти в корзину')

    expect(page).to have_text('Ваша корзина')
    expect(page).to have_text('Оформить заказ')
  end
end
