class Administrate::Api::PicturesController < Administrate::BaseController
  def create
    @picture = Picture.new(picture_params)
    if @picture.save
      render json: @picture
    else
      render json: @picture.errors, status: :unprocessable_entity
    end
  end

  private

  def picture_params
    params.require(:picture).permit(:image)
  end
end
