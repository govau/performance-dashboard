shared_examples 'api_authorized_not_found' do
  it 'returns not found' do
    expect(response).to have_http_status(404)
  end
end

shared_examples 'api_authorized_status_and_schema' do
  it { expect(response).to have_http_status(status) }
  it 'returns a valid body' do
    expect(response.body).to validate_as_schema(schema)
  end
end

shared_examples 'api_authorized_ok' do
  let(:status) { 200 }

  it 'status' do
    expect(response).to have_http_status(status)
  end

  it 'returns a valid body' do
    expect(response.body).to validate_as_schema(schema)
  end
end
