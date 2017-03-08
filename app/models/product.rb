class Product < ApplicationRecord
  include PgSearch
  belongs_to :category
  has_and_belongs_to_many :pictures
  has_many :line_items

  pg_search_scope :search_by_title, against: :title,
                  using: { tsearch: { prefix: true } }

  def thumb_cover
    cover = self.pictures.first
    cover ? cover.image(:thumb) : '/empty'
  end

  def similar
    category_ids = category.root.self_and_descendant_ids
    self.class.includes(:pictures).where(category: category_ids).order('random()').limit(4)
  end

  def ancestors
    category.self_and_ancestors.reverse
  end
end
