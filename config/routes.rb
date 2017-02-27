Rails.application.routes.draw do
  namespace :api do
    resources :categories
    resources :products
  end

  resources :products
  resources :categories
  root to: 'categories#index'
end
