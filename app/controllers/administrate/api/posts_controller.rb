class Administrate::Api::PostsController < Administrate::BaseController
  before_action :set_post, only: [:update, :show, :destroy ]

  def index
    @posts = Post.all.order('created_at DESC')
    render json: @posts
  end

  def show
    render json: @post
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    render json: {status: :ok}
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :cover, :preview, :body, :raw_body)
  end
end
