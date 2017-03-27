class Shop < ApplicationRecord
  validates :title, :card_number, :email, presence: true
  validates :email, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i }

  has_attached_file :left_logo, styles: {
    small: '25x25>',
  }, convert_options: {
    small:  "-quality 60 -strip",
  }
  validates_attachment_content_type :left_logo, content_type: /\Aimage\/.*\z/

  has_attached_file :middle_logo, styles: {
    small: '25x25>',
  }, convert_options: {
    small:  "-quality 60 -strip",
  }
  validates_attachment_content_type :middle_logo, content_type: /\Aimage\/.*\z/

  def small_left_logo
    left_logo(:small)
  end
end
