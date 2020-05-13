require 'rails_helper'

describe 'chart/_dataset', type: :view do
  let!(:widget) { FactoryBot.create :widget_with_data }
  let(:dataset) { widget.data_table.datasets.first }
  let(:decorated_dataset) { dataset.decorate(context:
    { data_table: widget.data_table })}

  before do
    dataset.update_attribute :label, 'bl*vh'
    render 'chart/dataset', dataset: decorated_dataset
  end

  subject { JSON.parse(rendered) }

  specify { expect(subject['id']).to eq dataset.name.parameterize }
  specify { expect(subject['name']).to eq 'bl*vh' }
  specify { expect(subject['data'].first['value']).to eq(
    decorated_dataset.datapoints.first.value) }
end
