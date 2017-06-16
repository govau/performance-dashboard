# require 'rails_helper'
#
# RSpec.describe "high contrast mode toggle", :type => :feature, :js => true do
#
#   context 'a user should be able to change the contrast of the dashboard pages' do
#     let(:dashboard)    { FactoryGirl.create(:dashboard_published) }
#
#     before(:example) do
#       visit(dashboard_path(dashboard))
#     end
#
#     it 'should show toggle switch' do
#       page.has_css?('div.toggle-switch')
#       find("label.switch-light").click
#       page.has_css?('body.is-high-contrast')
#     end
#   end
# end
