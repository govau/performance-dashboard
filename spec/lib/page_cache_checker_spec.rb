require 'rails_helper'
require 'page_cache_checker'

describe PageCacheChecker do
  let(:cache_dir) { DashboardCool::Application.config.action_controller.page_cache_directory }
  let(:requested_path) { '/dashboards/1' }
  let(:cached_path) { "#{cache_dir}#{requested_path}.html" }
  let(:dynamic_content) { 'FOO' }
  let(:static_content) { 'BAR' }
  let(:request) { Rack::MockRequest.new(subject).get(requested_path) }
  let(:app) { lambda {|env|
    [200, {'Content-Type' => 'text/plain'}, [dynamic_content]]
  }}

  subject { described_class.new(app) }
  let(:response_body) { subject.call([])[2][0] }

  before(:all) { DashboardCool::Application.config.action_controller.perform_caching = true }
  after(:all) { DashboardCool::Application.config.action_controller.perform_caching = false }

  context 'Cache exists' do
    before do
      File.open(cached_path, 'w') {|f| f.write static_content }
    end

    it 'gets the static content' do
      expect(request.body).to eq static_content
    end
  end

  context 'Cache does not exist' do
    before do
      FileUtils.rm(cached_path) if File.exist?(cached_path)
    end

    it 'gets the dynamic content' do
      expect(request.body).to eq dynamic_content
    end
  end
end
