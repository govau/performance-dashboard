require 'uri'

class UrlValidator < ActiveModel::EachValidator

  def validate_each(record, attribute, value)
    begin
      URI.parse(value)
    rescue URI::InvalidURIError
      record.errors[attribute] << 'is not a valid url'
    end
  end

end
