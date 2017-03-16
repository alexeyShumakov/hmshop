class Administrate::BannersController < Administrate::BaseController

  def index
    @json = {
      banners: {
        fromServer: true,
        banners: ActiveModelSerializers::SerializableResource
          .new(Banner.all, { include: '', adapter: :attributes })
          .as_json,
      }
    }.to_json
  end

  def new
    @json = {
      banners: {
        banner: ActiveModelSerializers::SerializableResource
          .new(Banner.new(url: ''), { include: '', adapter: :attributes })
          .as_json,
      }
    }.to_json

  end

  def show
    @json = {
      banners: {
        fromServer: true,
        banner: ActiveModelSerializers::SerializableResource
          .new(Banner.find(params[:id]), { include: '', adapter: :attributes })
          .as_json,
      }
    }.to_json
  end

  def edit
    @json = {
      banners: {
        fromServer: true,
        banner: ActiveModelSerializers::SerializableResource
          .new(Banner.find(params[:id]), { include: '', adapter: :attributes })
          .as_json,
      }
    }.to_json
  end
end
