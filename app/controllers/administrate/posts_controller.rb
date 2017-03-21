class Administrate::PostsController < Administrate::BaseController
  before_action :set_post, only: [:edit, :show]
  def index
    @posts = Post.all.order('created_at DESC')
    @json = {
      posts: {
        fromServer: true,
        posts: ActiveModelSerializers::SerializableResource
          .new(@posts, { fields: [:id, :title, :preview ]})
          .as_json[:posts],
      }
    }.to_json
  end

  def edit
    @json = {
      posts: {
        fromServer: true,
        post: ActiveModelSerializers::SerializableResource
          .new(@post)
          .as_json[:post],
      }
    }.to_json
  end

  def show
    @json = {
      posts: {
        fromServer: true,
        post: ActiveModelSerializers::SerializableResource
          .new(@post)
          .as_json[:post],
      }
    }.to_json
  end

  def new
    @json = {
      posts: {
        post: ActiveModelSerializers::SerializableResource
          .new(Post.new({title: '', preview: '', body: '' }))
          .as_json[:post],
      }
    }.to_json
  end

  private

  def set_post
    @post = Post.find params[:id]
  end
end
