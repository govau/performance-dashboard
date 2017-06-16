require 'rspec/expectations'
require 'json-schema'

RSpec::Matchers.define :validate_as_schema do |expected|
  match do |actual|
    JSON::Validator.validate!(expected, actual) == true
  end
end
