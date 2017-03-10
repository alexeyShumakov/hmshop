class Collection < ApplicationRecord
  has_and_belongs_to_many :products, -> { order 'created_at' }
  has_attached_file :cover, styles: {
    thumb: '235x235>', medium: '1000x650>'
  }, convert_options: {
    medium:  "-quality 60 -strip",
    thumb:  "-quality 60 -strip"
  }
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\z/
end
