class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged
  has_attached_file :cover, styles: {
    thumb: '350x255>', medium: '1000x650>'
  }, convert_options: {
    medium:  "-quality 60 -strip",
    thumb:  "-quality 60 -strip"
  }
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\z/
  validates :title, :slug, :preview, :cover, presence: true

  def thumb_cover
    cover(:thumb)
  end

  def medium_cover
    cover(:medium)
  end
end
