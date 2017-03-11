class CollectionsController < ApplicationController
  include ApplicationHelper
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart, :set_shared_variables

  def show
    @collection = Collection.find(params[:id])
    @json = {
        collections: ActiveModelSerializers::SerializableResource.new(@collection)
      }.to_json
  end

  def index
    collections = Collection.all.order('created_at DESC')

    @json = {
        collections: ActiveModelSerializers::SerializableResource.new(collections)
      }.to_json
  end
end
