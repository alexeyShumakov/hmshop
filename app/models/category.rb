class Category < ApplicationRecord
  has_many :products, dependent: :destroy
  has_closure_tree order: 'sort_order'

  def root_category_id
    self.root.id
  end
end
