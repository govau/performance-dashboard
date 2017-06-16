require 'rails_helper'

RSpec.describe Admin::OrganisationsController, type: :controller do
  describe '#import' do
    let(:user) { FactoryGirl.create :user_confirmed, admin: true }
    let(:organisation) { FactoryGirl.create :organisation }
    let!(:dashboard) { FactoryGirl.create :dashboard, organisation: organisation }
    let(:data) { fixture_file_upload 'valid-data.json' }
    let(:definition) { fixture_file_upload 'valid-definition.json' }

    it 'calls the importer' do
      # Bypass auth
      allow(subject).to receive(:authenticate_user!).and_return true
      allow(subject).to receive(:current_user).and_return user

      # Does the import
      expect(OrganisationImporter).to receive(:new).and_call_original

      # Clears the cache
      expect(subject).to receive(:invalidate_dashboards).and_call_original

      patch :import, params: { id: organisation.id, organisation:
        { data: data, definition: definition } }

      expect(response).to redirect_to admin_organisation_path organisation
    end
  end
end
