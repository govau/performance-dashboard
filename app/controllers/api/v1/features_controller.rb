class Api::V1::FeaturesController < ApplicationController
  def index
    @features = $flipper.features.select(&:enabled?).collect(&:name)
  end
end
