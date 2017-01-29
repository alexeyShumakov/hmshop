require 'rails_helper'

RSpec.describe WelcomeController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
    it "assigns framework_name" do
      get :index
      expect(assigns(:framework_name)).to eq('Rails')
    end
  end

end
