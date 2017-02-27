class CategoriesController < ApplicationController
  include CategoriesHelper
  before_action :set_categories

  def index
  end

  def show
    category = Category.includes(products: :pictures).find(params[:id])
    category_json = ActiveModelSerializers::SerializableResource.new(category, { include: '' }).as_json
    products_json = ActiveModelSerializers::SerializableResource.new(category.products, { include: '', fields: [:thumb_cover, :id, :title, :price] }).as_json
    root_category = { root_category_id: category.root.id }
    @json = products_json.merge(category_json).merge(root_category).to_json
  end
end
