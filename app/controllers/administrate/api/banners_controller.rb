class Administrate::Api::BannersController < Administrate::BannersController
  before_action :find_banner, only: [:show, :destroy, :update]

  def index
    @banners = Banner.all
    render json: @banners
  end

  def show
    render json: @banner
  end

  def destroy
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
  end

  def update
    if @banner.update(banner_params)
      render json: @banner
    else
      render json: @banner.errors, status: :unprocessable_entity
    end
  end

  private

  def find_banner
    @banner = Banner.find params[:id]
  end
  def banner_params
    params.require(:banner).permit(:url, :image)
  end
end
