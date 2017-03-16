class Administrate::Api::BannersController < Administrate::BannersController
  def index
    @banners = Banner.all
    render json: @banners
  end

  def show
    @banner = Banner.find params[:id]
    render json: @banner
  end

  def destroy
    @banner = Banner.find params[:id]
    @banner.destroy
    render json: {status: :ok}, status: 204
  end

  def create
    @banner = Banner.new(banner_params)
    if @banner.save
      render json: @banner
    else
      render json: @banner.errors, status: :unprocessable_entity
    end
  rescue Paperclip::AdapterRegistry::NoHandlerError
    render json: {image: 'empty'}, status: :unprocessable_entity
  end

  private

  def banner_params
    params.require(:banner).permit(:url, :image)
  end
end
