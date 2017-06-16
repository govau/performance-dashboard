module CacheInvalidation
  extend ActiveSupport::Concern

  def invalidate_dashboards(*dashboards)
    if dashboards.any?
      remove_cached_page '/index'

      dashboards.each do |dashboard|
        remove_cached_page "/dashboards/#{dashboard.to_param}"
      end
    end
  end

  def dashboards_for_dataset(dataset)
    dataset.data_tables.collect {|w| w.dashboard }
  end

  private

  def remove_cached_page(path)
    file = "#{cache_dir}#{path}.html"
    FileUtils.rm(file) if File.exist?(file)
  end

  def cache_dir
    DashboardCool::Application.config.action_controller.page_cache_directory
  end
end
