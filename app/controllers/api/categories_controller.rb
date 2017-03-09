class Api::CategoriesController < ApplicationController
  def show
    @category = Category.includes(products: :pictures).find params[:id]
    filters_json = GenerateFiltersHash.call({params: params}).filters_hash
    category_json = ActiveModelSerializers::SerializableResource.new(@category, {query_params: params}).as_json
    render json: [filters_json, category_json].inject(&:merge).to_json
  end

  def index
  end
end
