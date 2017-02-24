module CategoriesHelper
  def set_categories
    @json_categories = Category.hash_tree(limit_depth: 2).map {|parent, children| category_to_hash(parent,children) }
    @json_categories = { categories: @json_categories }.to_json
  end

  private

  def category_to_hash(parent, children)
    hash = {}
    hash[:id] = parent.id
    hash[:title] = parent.title
    hash[:children] = children.map {|p,c| category_to_hash(p,c)} if children.present?
    hash
  end
end
