require 'cf-app-utils'

class EnvInjection

  # Inject ENV vars from the first found named CloudFoundry UPS (User Provided Service)
  def self.inject!(*upss)
    upss.each do |ups|
      credentials = CF::App::Credentials.find_by_service_name(ups)

      if credentials.present?
        credentials.each do |k, v|
          ENV[k] = v
        end
      end
    end
  end
end
