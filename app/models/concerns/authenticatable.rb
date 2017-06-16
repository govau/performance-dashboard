module Authenticatable
  extend ActiveSupport::Concern

  included do
    has_and_belongs_to_many :tokens
  end

  module ClassMethods

    def authenticate(token)
      includes(:tokens).find_by('tokens.token' => token.to_s)
    end

  end

  def token
    tokens.last
  end

end
