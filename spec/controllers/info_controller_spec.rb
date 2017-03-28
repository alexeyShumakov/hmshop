require 'rails_helper'

RSpec.describe InfoController, type: :controller do

  let!(:shop) { create :shop }
  describe "GET #about" do
    it "returns http success" do
      get :about
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #how_to_order" do
    it "returns http success" do
      get :how_to_order
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #delivery" do
    it "returns http success" do
      get :delivery
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #contacts" do
    it "returns http success" do
      get :contacts
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #terms" do
    it "returns http success" do
      get :terms
      expect(response).to have_http_status(:success)
    end
  end

end
