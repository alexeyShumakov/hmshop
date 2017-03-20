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
    resources :categories
    resources :collections
    resources :orders

    namespace :api do
      resources :banners
      resources :categories
      resources :pictures
      resources :collections
      resources :orders
      resources :products do
        get 'search', on: :collection
      end
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
