class NewOrderEmailWorker
  include Sidekiq::Worker

  def perform(order_id)
    order = Order.find order_id
    admins = Admin.all
    admins.each do |admin|
      AdminMailer.new_order(admin, order).deliver_later
    end
  end
end
