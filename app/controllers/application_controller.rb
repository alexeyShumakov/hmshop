class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :create_categories

  def create_categories
    @json_categories = { categories: Category.all.select(:id, :title) }.to_json
  end
end
