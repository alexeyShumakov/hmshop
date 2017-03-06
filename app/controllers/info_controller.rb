class InfoController < ApplicationController
  include ApplicationHelper
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart, :set_shared_variables

  def about; end
  def how_to_order; end
  def delivery; end
  def contacts; end
  def terms; end
end
