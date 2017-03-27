class ApplicationMailer < ActionMailer::Base
  default from: Shop.first.email
  layout 'mailer'
end
