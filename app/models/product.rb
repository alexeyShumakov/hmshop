class Product < ApplicationRecord
  include PgSearch
  belongs_to :category
  has_and_belongs_to_many :pictures, -> { order 'created_at' }
  has_many :line_items
  has_many :history_items

  pg_search_scope :search_by_title, against: :title,
                  using: { tsearch: { prefix: true } }

  def thumb_cover
    cover = self.pictures.to_a.sort {|x,y| x.created_at <=> y.created_at }.first
    cover ? cover.image(:thumb) : '/empty'
  end

  def similar
    category_ids = category.root.self_and_descendant_ids
    self
      .class
      .includes(:pictures)
      .where(category: category_ids)
      .order('random()')
      .limit(5)
  end

  def ancestors
    category.self_and_ancestors.reverse
  end
end
