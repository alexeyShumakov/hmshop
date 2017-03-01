class ProductsController < ApplicationController
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart
end
