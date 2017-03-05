module ApplicationHelper
  def set_shared_variables
    cart_json = ActiveModelSerializers::SerializableResource.new(@cart, { include: '' }).as_json
    cart_json = {
      cart: {
        cart: cart_json[:cart],
        currentPosition: 0
      }
    }
    @shared_variables = [cart_json, @json_categories].inject(&:merge).to_json
  end
end
