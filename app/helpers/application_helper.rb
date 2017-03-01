module ApplicationHelper
  def set_shared_variables
    cart_json = ActiveModelSerializers::SerializableResource.new(@cart, { include: '' }).as_json
    @shared_variables = [cart_json, @json_categories].inject(&:merge).to_json
  end
end
