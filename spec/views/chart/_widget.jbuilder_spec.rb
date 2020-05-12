require 'rails_helper'

describe 'chart/_widget', type: :view do
  let(:options) { {} }
  let(:widget) { FactoryBot.create(:widget_with_data, options: options) }
  let(:do_render) { render 'chart/widget', widget: widget.decorate }
  before { view.lookup_context.prefixes << 'application' }
  subject { JSON.parse(rendered) }

  describe 'everything else' do
    before { do_render }
    specify { expect(subject['definition']).to eq subject['description'] }
    specify { expect(subject['latest']).to include 'label' }
    it { is_expected.not_to include 'displayRoundedData' }

    %w(id name size type units latest description definition updated_at datasets
        prefix suffix name_slug summary units_to_s style).each do |attr|
      it { is_expected.to include attr }
    end

    context 'with displayRoundedData option' do
      let(:options) { { 'displayRoundedData' => true } }
      it { is_expected.to include 'displayRoundedData' }
    end
  end
end
