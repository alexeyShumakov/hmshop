class Picture < ApplicationRecord
  has_and_belongs_to_many :products
  has_attached_file :image, styles: {
    thumb: '235x235>', medium: '1000x650>'
  }, convert_options: {
    medium:  "-quality 60 -strip",
    thumb:  "-quality 60 -strip"
  }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates :image, presence: true

  def thumb_img
    self.image(:thumb)
  end

  def medium_img
    self.image(:medium)
  end

  def original_img
    image
  end
end
