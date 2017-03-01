Rails.application.routes.draw do
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
