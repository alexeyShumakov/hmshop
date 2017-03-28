class ApplicationMailer < ActionMailer::Base
  default from: :default_email
  layout 'mailer'

  def default_email
    shop = Shop.first
    shop.blank? ? 'default@mail.net' : shop.email
  end
end
