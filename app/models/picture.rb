class Picture < ApplicationRecord
  has_and_belongs_to_many :products
  has_attached_file :image, styles: { thumb: '235x235>', medium: '1000x650>' }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
