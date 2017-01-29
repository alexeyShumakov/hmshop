class WelcomeController < ApplicationController
  def index
    @framework_name = 'Rails'
    WelcomeWorker.perform_async
  end
end
