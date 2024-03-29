class Category < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged
  has_many :products, dependent: :destroy
  has_closure_tree order: 'sort_order'
  has_attached_file :icon, styles: {
    thumb: "40x40#",
    medium: "400x400#"
  }, convert_options: {
    thumb:  "-quality 85 -strip" }
  validates_attachment_content_type :icon, content_type: /\Aimage\/.*\z/

  validates :title, :slug, presence: true

  def thumb_icon
    icon(:thumb)
  end

  def medium_icon
    icon(:medium)
  end

  def root_category_id
    root.id if root.present?
  end
end
