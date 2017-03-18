class Administrate::Api::CategoriesController < Administrate::BaseController
  include CategoriesHelper
  before_action :set_categories, only: [:index]
  def index
    render json: @json_categories
  end
end
