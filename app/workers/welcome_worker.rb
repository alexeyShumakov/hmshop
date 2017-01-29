class WelcomeWorker
  include Sidekiq::Worker

  def perform(*args)
    puts 'Hello from Sidekiq!'
  end
end
