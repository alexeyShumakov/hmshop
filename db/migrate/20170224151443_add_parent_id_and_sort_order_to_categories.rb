class AddParentIdAndSortOrderToCategories < ActiveRecord::Migration[5.0]
  def change
    add_column :categories, :parent_id, :integer
    add_column :categories, :sort_order, :integer
  end
end
