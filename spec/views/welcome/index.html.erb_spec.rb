require 'rails_helper'

RSpec.describe "welcome/index.html.erb", type: :view do
  it 'assign framework_name' do
    assign(:framework_name, 'Rails')
    render
    expect(rendered).to match /Rails/
  end
end
