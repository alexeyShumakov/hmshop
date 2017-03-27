module ApplicationHelper
  def set_shared_variables
    @shop = Shop.first
    shop_json = ActiveModelSerializers::SerializableResource.new(@shop, {fields: [:title, :small_left_logo]}).as_json
    cart_json = ActiveModelSerializers::SerializableResource.new(@cart, {include: 'line_items.product' }).as_json
    collections = Collection.all.order('created_at DESC').limit(4)
    collections_json = ActiveModelSerializers::SerializableResource
      .new(collections, {root: 'sidebar_collections', include: '', fields: [:id, :title, :slug] })
      .as_json

    cart_json = {
      cart: {
        cart: cart_json[:cart],
        currentPosition: 0
      }
    }
    @shared_variables = [collections_json, cart_json, @json_categories, shop_json].inject(&:merge).to_json
  end
end
