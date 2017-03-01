class ProductsController < ApplicationController
  include ApplicationHelper
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart, :set_shared_variables
end
