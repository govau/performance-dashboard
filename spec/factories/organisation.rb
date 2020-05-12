FactoryBot.define do
  factory :organisation do
    sequence(:name) { |n| "organisation-#{n}" }
    sequence(:url) { |n| "organisation-#{n}.gov.au" }
  end
end
