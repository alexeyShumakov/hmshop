class OrderMailer < ApplicationMailer
  def order_confirmation(order, shop)
    @order = order
    @shop = shop
    mail(from: @shop.email, to: order.email, subject: "#{shop.title}. Заказ №#{order.id}")
  end
end
