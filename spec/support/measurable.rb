RSpec.shared_examples 'measureable' do

  let(:unit)        { 'n' }
  subject(:dataset) { FactoryBot.create(:dataset, :units => unit) }

  its(:prefix) { is_expected.to eq ''}
  its(:suffix) { is_expected.to eq ''}

  describe '$' do
    let(:unit) { '$' }

    it { is_expected.to be_money }

    its(:prefix) { is_expected.to eq '$'}
    its(:suffix) { is_expected.to eq ''}
  end

  describe '%' do
    let(:unit) { '%' }

    it { is_expected.to be_percentage }

    its(:prefix) { is_expected.to eq ''}
    its(:suffix) { is_expected.to eq '%'}
  end

end
