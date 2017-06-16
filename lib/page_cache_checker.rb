# From this PR: https://github.com/rails/actionpack-page_caching/pull/30

class PageCacheChecker
  def initialize(app)
    @app = app
  end

  def call(env)
    config = DashboardCool::Application.config.action_controller

    if config.perform_caching
      unless env['PATH_INFO'] =~ /^\/assets\//
        cache_dir = config.page_cache_directory

        if cache_dir.present?
          # resolve index files & other HTML files
          ['index', ''].each do |fragment|
            cache_file = "#{cache_dir.to_s.gsub(/\/$/, '')}#{env['PATH_INFO']}#{fragment}.html"

            if File.exist?(cache_file) && File.readable?(cache_file)
              response = Rack::Response.new [File.read(cache_file)]
              return [200, response.headers, response.body]
            end
          end
        end
      end
    end

    @app.call(env)
  end
end
