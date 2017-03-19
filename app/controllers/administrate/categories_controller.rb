class Administrate::CategoriesController < Administrate::BaseController
  include CategoriesHelper
  before_action :set_categories, only: [:index]
  before_action :set_category, only: [:edit, :show]
  def index
    @json = {
      categories: {
        fromServer: true,
        categories: @json_categories[:categories]
      }
    }.to_json
  end

  def edit
    @json = {
      categories: {
        fromServer: true,
        category: ActiveModelSerializers::SerializableResource
        .new(@category, {include: [:parent]})
        .as_json[:category]
      }
    }.to_json
  end

  def show
    @json = {
      categories: {
        fromServer: true,
        category: ActiveModelSerializers::SerializableResource
        .new(@category, {include: [:parent]})
        .as_json[:category]
      }
    }.to_json
  end

  def new
    empty_params = {}
    @json = {
      categories: {
        category: ActiveModelSerializers::SerializableResource
        .new(Category.new({title: ''}), {include: [:parent]})
        .as_json[:category]
      }
    }.to_json
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end
end
