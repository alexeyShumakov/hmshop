class Api::CategoriesController < ApplicationController
  def show
    params[:category_id] = params[:id]
    data = GenerateCategory.call({params: params})
    render json: [data.filters_hash, data.category_hash, data.products_hash]
      .inject(&:merge)
      .to_json
  end

  def index
  end
end
