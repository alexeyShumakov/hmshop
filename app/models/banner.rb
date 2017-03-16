class Banner < ApplicationRecord
  has_attached_file :image, styles: {
    large: "1080x450#"
  }, convert_options: {
    large:  "-quality 60 -strip" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates :url, :image, presence: true

  def img
    self.image(:large)
  end
end
