class EnsureAuthFeaturesExist < ActiveRecord::Migration[5.0]

  class FlipperFeature < ActiveRecord::Base
  end

  # Ensure that auth features are set up so that they can be switched on or off
  def up
    %w(auth two_factor).each do |flag|
      FlipperFeature.find_or_create_by key: flag
    end
  end

  def down
  end
end
