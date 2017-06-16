require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "rails/test_unit/railtie"
require "csv"
require './lib/page_cache_checker'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DashboardCool
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    cache_dir = "#{Rails.root.to_s}/public/page_cache_#{Rails.env}"
    config.action_controller.page_cache_directory = cache_dir
    # config.middleware.insert_after Rack::Sendfile, ::PageCacheChecker

    config.after_initialize do
      if ActiveRecord::Base.connection.data_source_exists? 'dashboards'
        dashboards = Dashboard.all
        ApplicationController.new.invalidate_dashboards(*dashboards)
      end
    end

    config.generators do |g|
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.view_specs false
      g.decorator false
    end
  end
end

