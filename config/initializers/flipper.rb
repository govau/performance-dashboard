require 'flipper'
require 'flipper/adapters/active_record'

# Constraint class (for routing)

class CanAccessFlipperUI
  def self.matches?(request)
    current_user = request.env['warden'].user
    CanAccessFlipperUI.two_factor_authenticated?(request) && current_user.present? && current_user.respond_to?(:admin?) && current_user.admin?
  end

  def self.two_factor_authenticated?(request)
    return true unless $flipper[:two_factor].enabled?
    request.env['warden'].session(:user)[TwoFactorAuthentication::NEED_AUTHENTICATION] != true
  end
end

# Set up global flipper instance

adapter = Flipper::Adapters::ActiveRecord.new
$flipper = Flipper.new(adapter)

# Set default features (e.g. to avoid auth lockout)

if ActiveRecord::Base.connection.data_source_exists? 'flipper_features'
  default_features = YAML.load_file(Rails.root.join('config/flipper.yml'))[Rails.env]

  if ENV['FORCE_FEATURES']
    default_features.merge! JSON.parse ENV['FORCE_FEATURES']
  end

  if default_features.present?
    default_features.each do |feature_name, bool|
      feature = $flipper[feature_name.to_sym]

      if bool
        feature.enable
      else
        feature.disable
      end
    end
  end
end
