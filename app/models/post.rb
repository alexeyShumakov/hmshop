class Post < ApplicationRecord
  has_attached_file :cover, styles: {
    thumb: '350x255>', medium: '1000x650>'
  }, convert_options: {
    medium:  "-quality 60 -strip",
    thumb:  "-quality 60 -strip"
  }
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\z/

  def thumb_cover
    cover(:thumb)
  end

  def medium_cover
    cover(:medium)
  end
end