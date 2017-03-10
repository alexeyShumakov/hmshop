class AddToHistory
  include Interactor

  def call
    history_item = context
      .cart
      .history_items
      .find_or_initialize_by(product: context.product)

    history_item.new_record? ? history_item.save : history_item.touch
  end
end
