class ProductsController < ApplicationController
  include CategoriesHelper
  before_action :set_categories
end
