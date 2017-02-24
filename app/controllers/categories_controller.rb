class CategoriesController < ApplicationController
  include CategoriesHelper
  before_action :set_categories

  def index
  end

  def show
    category = Category.includes(:products).find(params[:id])
    category_json = ActiveModelSerializers::SerializableResource.new(category, { include: '' }).as_json
    products_json = ActiveModelSerializers::SerializableResource.new(category.products, { include: '' }).as_json
    @json = products_json.merge(category_json).to_json
  end
end
