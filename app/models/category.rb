class Category < ApplicationRecord
  has_many :products, dependent: :destroy
  has_closure_tree order: 'sort_order'
end
