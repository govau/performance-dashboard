FactoryBot.define do
  factory :user do
    organisation
    email                 { Faker::Internet.email }
    password              'password'
    password_confirmation 'password'

    factory :user_confirmed do
      after(:create) { |user| user.confirm }

      factory :user_with_token do
        transient do
          count 1
        end

        after(:create) do |user, evaluator|
          user.tokens  << create_list(:token, evaluator.count)
          user.save!
        end
      end
    end
  end
end
