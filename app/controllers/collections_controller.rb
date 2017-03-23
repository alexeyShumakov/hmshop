class CollectionsController < ApplicationController
  include ApplicationHelper
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart, :set_shared_variables

  def show
    @collection = Collection.friendly.includes(products: :pictures).find(params[:id])
    @json = {
        collections: ActiveModelSerializers::SerializableResource.new(@collection)
      }.to_json
  end

  def index
    collections = Collection.includes(products: :pictures).all.order('created_at DESC')

    @json = {
        collections: ActiveModelSerializers::SerializableResource.new(collections)
      }.to_json
  end
end
