module Sslify
  extend ActiveSupport::Concern

  included do
    force_ssl if: :sslify?
  end

  private

  def sslify?
    !(Rails.env.development? || Rails.env.test?)
  end

end
