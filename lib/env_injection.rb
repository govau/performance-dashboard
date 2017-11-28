require 'cf-app-utils'

class EnvInjection

  # Inject ENV vars from a named CloudFoundry UPS (User Provided Service)
  def self.inject!(ups)
    CF::App::Credentials.find_by_service_name(ups).each do |k, v|
      ENV[k] = v
    end
  end
end
