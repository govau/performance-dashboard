require 'rails_helper'

RSpec.describe TokenDecorator, type: :decorator do
  let(:token)         { FactoryGirl.create(:token) }
  subject(:decorator) { token.decorate }

  specify { expect(subject.display_name).to eq "Token #{token.id}" }
  specify { expect(subject.to_short_s.length).to eq 7 }
  specify { expect(subject.active?).to eq 'Yes' }
end
