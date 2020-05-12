shared_context 'api_authorisation' do
  let(:organisation)  { FactoryBot.create(:organisation) }
  let(:dashboard)     { FactoryBot.create(:dashboard_with_widgets, organisation: organisation) }
  let(:dataset)       { dashboard.datasets.first }

  let(:user)          { FactoryBot.create(:user_with_token, dashboards: [dashboard]) }

  let(:authorization) { ActionController::HttpAuthentication::Token.encode_credentials(user.token) }

  before { request.env['HTTP_AUTHORIZATION'] = authorization }

end
