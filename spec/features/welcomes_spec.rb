require 'rails_helper'

RSpec.feature "Welcomes", type: :feature do
  scenario "User sees a welcome message" do
    visit '/'
    expect(page).to have_text('Hello from Rails!')
  end
end
