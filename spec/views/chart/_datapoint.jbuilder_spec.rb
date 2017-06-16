require 'rails_helper'

describe 'chart/_datapoint', type: :view do
  let(:datapoint) { PseudoDatapoint.new Time.now, 12.9 }

  before do
    render 'chart/datapoint', datapoint: datapoint
  end

  subject { JSON.parse(rendered) }

  specify { expect(subject['id']).to eq datapoint.id }
  specify { expect(subject['value']).to eq datapoint.value }
  specify { expect(subject['label']).to eq datapoint.label }
end
