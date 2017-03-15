class Administrate::BannersController < Administrate::BaseController

  def index
    @json = {
      banners: {
        banners: ActiveModelSerializers::SerializableResource
          .new(Banner.all, { include: '', adapter: :attributes })
          .as_json,
      }
    }.to_json
  end

  def show
    @json = {
      banners: {
        banner: ActiveModelSerializers::SerializableResource
          .new(Banner.find(params[:id]), { include: '', adapter: :attributes })
          .as_json,
      }
    }.to_json
  end

  def edit
  end
end
