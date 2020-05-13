#TODO uncomment this spec if you get cache invalidation to work
#     in a multi-server context

# require 'rails_helper'

# RSpec.shared_examples 'absent caches' do
#   specify { expect(File.exist?(cached_index)).to be false }
#   specify { expect(File.exist?(cached_show)).to be false }
# end

# RSpec.describe 'cache invalidation', type: :request do

#   before(:all) do
#     @cache_dir = DashboardCool::Application.config.action_controller.page_cache_directory
#     ActionController::Base.perform_caching = true
#     load 'dashboards_controller.rb'
#     FileUtils.rm_f "#{@cache_dir}/index.html"
#     FileUtils.rm_f Dir.glob "#{@cache_dir}/dashboards/*.html"
#   end

#   after(:all) do
#     DashboardCool::Application.config.action_controller.perform_caching = false
#   end

#   let(:cached_index) { "#{@cache_dir}/index.html" }
#   let(:cached_show) { "#{@cache_dir}/dashboards/#{@dashboard.to_param}.html" }

#   before do
#     @user = FactoryBot.create(:user)
#     @dashboard = FactoryBot.create(:dashboard_with_widgets, :published)
#     @user.dashboards << @dashboard

#     get root_path
#     get dashboard_path @dashboard
#     allow_any_instance_of(Api::V1::ApiController).to receive(:authenticate).and_return(true)
#     allow_any_instance_of(Api::V1::ApiController).to receive(:current_user).and_return(@user)
#   end

#   describe 'before invalidation' do
#     specify { expect(File.exist?(cached_index)).to be true }
#     specify { expect(File.exist?(cached_show)).to be true }
#   end

#   describe 'after updating a dashboard' do
#     before do
#       put api_v1_dashboard_path(@dashboard), params: { name: rand.to_s }
#     end

#     it_behaves_like 'absent caches'
#   end

#   describe 'after updating a widget' do
#     before do
#       put api_v1_dashboard_widget_path(@dashboard.widgets.first,
#         dashboard_id: @dashboard.id),
#           params: { name: rand.to_s }
#     end

#     it_behaves_like 'absent caches'
#   end

#   describe 'after updating a dataset' do
#     before do
#       put api_v1_dataset_path(@dashboard.datasets.first),
#         params: { name: rand.to_s }
#     end

#     it_behaves_like 'absent caches'
#   end
# end
