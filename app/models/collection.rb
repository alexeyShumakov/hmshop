class Collection < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged
  has_and_belongs_to_many :products, -> { order 'created_at' }
  has_attached_file :cover, styles: {
    thumb: '350x255>', medium: '1000x650>'
  }, convert_options: {
    medium:  "-quality 60 -strip",
    thumb:  "-quality 60 -strip"
  }
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\z/

  validates :title, :slug, :description, :cover, :products, presence: true

  def total_price
    products.to_a.sum(&:price)
  end

  def thumb_cover
    cover(:thumb)
  end
end
