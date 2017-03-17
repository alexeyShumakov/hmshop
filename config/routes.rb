Rails.application.routes.draw do
  devise_for :admins

  get 'cart', to: 'cart#index'
  get 'info/about'
  get 'info/how_to_order'
  get 'info/delivery'
  get 'info/contacts'
  get 'info/terms'

  namespace :administrate do
    root to: 'products#index'
    resources :products
    resources :banners

    namespace :api do
      resources :banners
      resources :products
    end
  end

  namespace :api do
    resources :orders
    resources :posts
    resources :collections
    resources :categories
    resources :products do
      get 'search', on: :collection
    end
    resources :line_items
    get 'cart', to: 'carts#show'
  end

  resources :posts
  resources :products
  resources :categories
  resources :collections
  root to: 'categories#index'
end
