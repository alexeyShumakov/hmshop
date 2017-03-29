require 'rails_helper'

RSpec.feature "Add product to cart", js: true, type: :feature do
  let!(:cart) {create :cart}
  let!(:shop) {create :shop}
  let!(:picture) {create :picture}
  let!(:category) {create :category}
  let!(:category_1) {create :category}
  let!(:product) {create :product, price: 9.99, title: 'foo products name', pictures: [picture], category: category}

  scenario "User add product to cart" do
    visit "/products/#{product.slug}"
    click_button('Добавить в корзину')

    expect(page).to have_text('ПЕРЕЙТИ В КОРЗИНУ')
    expect(page).to have_css '.basket__counter b', text: '1'

    click_link('Перейти в корзину')

    expect(page).to have_text('Ваша корзина')
    expect(page).to have_text('Оформить заказ')
  end

  scenario "User add product to cart and create order" do
    visit "/categories/#{category.slug}"
    expect(page).to have_text(product.title)
    expect(page).to have_css('.cart')

    find('.cart').hover

    expect(page).to have_css('.cart__top-menu')

    find('.cart__top-menu i').click
    expect(page).to have_text('УЗНАТЬ БОЛЬШЕ О ТОВАРЕ')

    click_button('Добавить в корзину')
    click_link('Перейти в корзину')
    expect(page).to have_text('Оформить заказ')

    fill_in 'Имя', with: 'My name'
    fill_in 'Email', with: 'My@email.com'
    fill_in 'Номер телефона', with: '1234'
    fill_in 'Адрес доставки', with: 'my address'
    click_button 'Оформить заказ'
    expect(page).to have_text('Поздравляем! Ваша заказ оформлен.')
  end

  scenario "Search products" do
    visit "/categories/#{category_1.slug}"
    find('.nav__icon.fa.fa-search').click
    find('.search__input').set('foo')
    expect(page).to have_css('.search__content_show')
    expect(page).to have_text(product.title)
  end
end
