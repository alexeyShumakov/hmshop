class Api::PostsController < ApplicationController
  def show
    @post = Post.friendly.find(params[:id])
    render json: @post
  end

  def index
    @posts = Post.all.order('created_at desc')
    render json: @posts
  end
end
