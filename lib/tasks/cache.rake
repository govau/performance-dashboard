namespace :cache do
  desc 'Clear page cache'
  task clear_pages: :environment do
    dashboards = Dashboard.all
    ApplicationController.new.invalidate_dashboards(*dashboards)
  end
end
