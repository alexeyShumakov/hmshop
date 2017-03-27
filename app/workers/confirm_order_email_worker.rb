class ConfirmOrderEmailWorker
  include Sidekiq::Worker

  def perform(order_id)
    order = Order
      .includes(line_items: :product)
      .find(order_id)
    shop = Shop.first
    OrderMailer.order_confirmation(order, shop).deliver_later
  end
end
