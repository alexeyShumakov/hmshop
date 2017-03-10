class GetHistory
  include Interactor

  def call
    history = Product
      .includes(:pictures, history_items: :cart)
      .where(history_items: { cart: context.cart })
      .order('history_items.updated_at DESC')
      .limit(5)
    context.history = history

    options = {root: 'history', each_serializer: HistoryItemSerializer}
    context.history_hash = ActiveModelSerializers::SerializableResource
      .new(history, options)
      .as_json
  end
end
