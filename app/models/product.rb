class Product < ApplicationRecord
  belongs_to :category
  has_and_belongs_to_many :pictures

  def thumb_cover
    cover = self.pictures.first
    cover ? cover.image(:thumb) : '/empty'
  end
end
