class PictureSerializer < ActiveModel::Serializer
  attributes :id, :thumb_img, :medium_img, :original_img
end
