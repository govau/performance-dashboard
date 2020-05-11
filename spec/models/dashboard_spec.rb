require 'rails_helper'

RSpec.describe Dashboard, type: :model do

  it { is_expected.to belong_to :organisation }

  it { is_expected.to have_many :widgets }

  it { is_expected.to have_many :users }

  it { is_expected.to validate_presence_of :name }

  subject!(:dashboard)    { FactoryGirl.create(:dashboard) }

  its(:to_param) { is_expected.to include(dashboard.name.parameterize) }

  specify { expect(subject.to_s).to eq subject.name }

  describe 'url' do
    it { should_not allow_value('<blah').for(:url) }
    it { should allow_value('blah.com').for(:url) }

    subject(:dashboard) { FactoryGirl.build(:dashboard, :url => '<BLAH>') }

    it 'validation' do
      expect(dashboard).to be_invalid
      expect(dashboard.errors[:url]).to be_present
    end
  end

  context 'unpublished' do
    subject { Dashboard.published.all }
    it      { is_expected.to be_empty }
  end

  context 'published' do
    let!(:dashboard) { FactoryGirl.create(:dashboard_published) }
    subject { Dashboard.published.all }
    it      { is_expected.to have(1).dashboard }
  end

  describe 'kpi widgets' do
    let!(:widget) { FactoryGirl.create(:widget, :name => 'User satisfaction', :dashboard => dashboard) }
    subject { dashboard.widgets.kpis }
    it { is_expected.to have(1).widget }
  end

  describe 'last_updated' do
    before do
      FactoryGirl.create(:widget, :dashboard => dashboard, :last_updated_at => '2030-01-01')
      FactoryGirl.create(:widget, :dashboard => dashboard)
    end

    it { expect(dashboard.last_updated_at).to eq Date.parse('2030-01-01') }
  end

  describe '#published?' do
    subject { dashboard.published? }

    context 'published_at is null' do
      let(:dashboard) { FactoryGirl.create(:dashboard) }
      it { is_expected.to be false }
    end

    context 'published_at is in the past' do
      let(:dashboard) { FactoryGirl.create(:dashboard_published) }
      it { is_expected.to be true }
    end

    context 'published_at is in the future' do
      let(:dashboard) { FactoryGirl.create(:dashboard, published_at: 5.days.from_now) }
      it { is_expected.to be false }
    end
  end

  describe 'rows' do
    let!(:widget_0_0) { FactoryGirl.create(:widget, dashboard: dashboard, row: 0, pos: 0, name: Widget::KPIS[0]) }
    let!(:widget_0_1) { FactoryGirl.create(:widget, dashboard: dashboard, row: 0, pos: 1, name: Widget::KPIS[1]) }
    let!(:widget_1_0) { FactoryGirl.create(:widget, dashboard: dashboard, row: 1, pos: 0) }
    let!(:widget_1_1) { FactoryGirl.create(:widget, dashboard: dashboard, row: 1, pos: 1) }
    let!(:widget_2_0) { FactoryGirl.create(:widget, dashboard: dashboard, row: 2, pos: 0) }

    # subject { dashboard.rows }
    it { expect(dashboard.rows).to eq [[widget_0_0, widget_0_1], [widget_1_0, widget_1_1], [widget_2_0]] }
    it { expect(dashboard.first_row).to eq [widget_0_0, widget_0_1] }
    it { expect(dashboard.remaining_rows).to eq [[widget_1_0, widget_1_1], [widget_2_0]] }
  end

  describe 'datasets' do
    subject(:dashboard) { FactoryGirl.create(:dashboard_with_widgets) }
    it { expect( dashboard.datasets ).to have_at_least(1).dataset }
  end
end
