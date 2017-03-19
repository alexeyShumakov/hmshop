class Category < ApplicationRecord
  has_many :products, dependent: :destroy
  has_closure_tree order: 'sort_order'

  validates :title, presence: true
  def root_category_id
    root.id if root.present?
  end
end
