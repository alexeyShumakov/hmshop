class Category < ApplicationRecord
  has_many :products, dependent: :destroy
  has_closure_tree order: 'sort_order'
  has_attached_file :icon, styles: {
    thumb: "22x22#",
    medium: "400x400#"
  }, convert_options: {
    thumb:  "-quality 60 -strip" }
  validates_attachment_content_type :icon, content_type: /\Aimage\/.*\z/

  validates :title, presence: true
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
