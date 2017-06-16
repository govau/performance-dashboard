FactoryGirl.define do
  factory :dataset do
    sequence(:name)   { |n| "dataset-#{n}" }
    sequence(:label)  { |n| "d-#{n}" }
    units '$'
    period 'free'
  end
end
