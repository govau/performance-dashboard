# require 'rails_helper'
#
# RSpec.describe 'smoke test', :type => :feature, :js => true do
#
#     let(:name)        { 'Vtha' }
#     let(:opts)        {{
#         :name => name,
#         :published_at => 1.day.ago,
#         :display_hero => false,
#         :display_kpis =>  false
#       }}
#
#     let!(:dashboard)  { FactoryBot.create(:dashboard_with_widgets, opts) }
#
#     before(:example) do
#       visit('/')
#     end
#
#     it 'mostly works' do
#       page.has_title? 'Performance Dashboards'
#       page.has_content? dashboard.name
#
#       # click_on("View #{name}") ## CANNOT GET THIS TO WORK
#       visit("/dashboards/#{dashboard.id}")
#
#       # save_and_open_page
#
#       page.has_title? name
#       page.has_content? name
#     end
#
# end
