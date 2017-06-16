shared_examples 'api_unauthorized_examples' do

  context 'without token' do
    it 'returns unauthorized' do
      expect(response).to have_http_status(401)
    end
  end

  context 'with invalid token' do
    let(:authorization)   { ActionController::HttpAuthentication::Token.encode_credentials('blahvtha') }

    before { request.env["HTTP_AUTHORIZATION"] = authorization }

    it 'returns unauthorized' do
      expect(response).to have_http_status(401)
    end
  end

  context 'with expired token' do
    let(:token)         { FactoryGirl.create(:token_expired) }
    let(:user)          { FactoryGirl.create(:user, :tokens => [token]) }

    let(:authorization) { ActionController::HttpAuthentication::Token.encode_credentials(token) }

    before { request.env["HTTP_AUTHORIZATION"] = authorization }

    it 'returns unauthorized' do
      expect(response).to have_http_status(401)
    end
  end

end
