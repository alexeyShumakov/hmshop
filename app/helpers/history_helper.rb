module HistoryHelper
  def add_to_history(cart, product)
    history_item = cart.history_items.find_or_initialize_by(product: product)
    history_item.new_record? ? history_item.save : history_item.touch
  end

  def get_history_products(cart)
    Product
      .includes(:pictures, history_items: :cart)
      .where(history_items: { cart: cart })
      .order('history_items.updated_at DESC')
      .limit(5)
  end

  def serialize_history_products(history_products)
    options = {root: 'history', each_serializer: HistoryItemSerializer}
    ActiveModelSerializers::SerializableResource.new(history_products, options)
  end
end
