require 'rails_helper'

RSpec.describe Organisation, type: :model do

  it { is_expected.to have_many :dashboards }
  
  it { is_expected.to validate_presence_of :name }
  it { is_expected.to validate_presence_of :url }

end
