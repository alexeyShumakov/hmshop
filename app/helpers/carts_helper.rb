module CartsHelper
  def set_cart
    @cart = Cart.find cookies[:cart_id]
  rescue ActiveRecord::RecordNotFound
    @cart = Cart.create
    cookies[:cart_id] = @cart.id
  end
end
