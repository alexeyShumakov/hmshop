class Api::CategoriesController < ApplicationController
  def show
    @category = Category.includes(products: :pictures).find params[:id]
    render json: @category
  end

  def index
  end
end
