module CartsHelper
  def set_cart
    @cart = Cart.includes(line_items: :product).find cookies[:cart_id]
  rescue ActiveRecord::RecordNotFound
    @cart = Cart.create
    cookies[:cart_id] = @cart.id
  end
end
