class Administrate::Api::CategoriesController < Administrate::BaseController
  include CategoriesHelper
  before_action :set_categories, only: [:index]
  before_action :set_category, only: [:show, :destroy, :update]

  def index
    render json: @json_categories
  end

  def show
    render json: @category
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @category.destroy
    render json: {status: :ok}
  end

  private

  def set_category
    @category = Category.find params[:id]
  end

  def category_params
    {
      title: params[:category][:title],
      parent: Category.find_by(id: params[:category][:parent_id])
    }
  end
end
