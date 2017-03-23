class AdminMailer < ApplicationMailer
  def new_order(admin, order)
    @order = order
    mail(to: admin.email, subject: "Заказ №#{order.id}")
  end
end
