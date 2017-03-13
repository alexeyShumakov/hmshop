class PostsController < ApplicationController
  include ApplicationHelper
  include CategoriesHelper
  include CartsHelper
  before_action :set_categories, :set_cart, :set_shared_variables

  def show
    @post = Post.find(params[:id])
    @json = {
      posts: ActiveModelSerializers::SerializableResource.new(@post)
      }.to_json
  end

  def index
    @posts = Post.all.order('created_at desc')
    @json = {
      posts: ActiveModelSerializers::SerializableResource.new(@posts)
      }.to_json
  end
end
