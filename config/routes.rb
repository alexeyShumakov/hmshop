Rails.application.routes.draw do
  get 'cart', to: 'cart#index'

  get 'info/about'
  get 'info/how_to_order'
  get 'info/delivery'
  get 'info/contacts'
  get 'info/terms'

  namespace :api do
    resources :categories
    resources :products
    resources :line_items
    get 'cart', to: 'carts#show'
  end

  resources :products
  resources :categories
  root to: 'categories#index'
end
