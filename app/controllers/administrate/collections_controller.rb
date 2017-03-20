class Administrate::CollectionsController < Administrate::BaseController
  before_action :set_collection, only: [:edit, :show]

  def new
    @json = {
      collections: {
        collection: ActiveModelSerializers::SerializableResource
          .new(Collection.new(title: '', description: ''))
          .as_json[:collection]
      }
    }.to_json
  end

  def edit
    @json = {
      collections: {
        fromServer: true,
        collection: ActiveModelSerializers::SerializableResource
          .new(@collection)
          .as_json[:collection]
      }
    }.to_json
  end

  def show
    @json = {
      collections: {
        fromServer: true,
        collection: ActiveModelSerializers::SerializableResource
          .new(@collection)
          .as_json[:collection]
      }
    }.to_json
  end

  def index
    @collections = Collection.includes(products: :pictures).all
    @json = {
      collections: {
        fromServer: true,
        collections: ActiveModelSerializers::SerializableResource
          .new(@collections, {include: []})
          .as_json[:collections]
      }
    }.to_json
  end

  private

  def set_collection
    @collection = Collection.includes(products: :pictures).find params[:id]
  end
end
