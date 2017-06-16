require 'rails_helper'

RSpec.describe ApplicationHelper, type: :helper do

  let(:action_name)  { 'index' }

  before do
    controller.singleton_class.class_eval do
      def controller_name
        'dashboards'
      end
    end
    controller.action_name = action_name
  end

  it{ expect(helper.body_route).to include 'dashboards'}

  describe 'body_class' do
    let(:classes) { %w{blah vtha} }
    subject { helper.body_class(classes) }

    it{ is_expected.to include 'dashboards'}
    it{ is_expected.to include 'blah'}
    it{ is_expected.to include 'vtha'}
  end

  describe 'display_high_contrast_mode' do
    let(:action_name) { 'show' }
    it{ expect(helper).to be_display_high_contrast_mode}
  end

  describe 'development_server?' do
    it{ expect(helper).to_not be_development_server }

    context 'development' do
      before do
        ENV['DEV_SERVER'] = 'true'
        allow(Rails.env).to receive(:development?).and_return(true)
      end
      it{ expect(helper).to be_development_server }
    end

  end
end
