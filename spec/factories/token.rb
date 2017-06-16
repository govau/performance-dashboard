FactoryGirl.define do
  factory :token do
    factory :token_expired do
      expired_at { rand(30).hours.ago }
    end
  end
end
