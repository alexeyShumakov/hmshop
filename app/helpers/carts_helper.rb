module CartsHelper
  def set_cart
    @cart = Cart.includes(line_items: {product: :pictures}).find cookies[:cart_id]
  rescue ActiveRecord::RecordNotFound
    @cart = Cart.create
    cookies[:cart_id] = {
      value: @cart.id,
      expires: 1.year.from_now
    }
  end
end
