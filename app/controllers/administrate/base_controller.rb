class Administrate::BaseController < ApplicationController
  layout 'administrate'
  before_action :authenticate_admin!
end
