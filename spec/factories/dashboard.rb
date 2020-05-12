FactoryBot.define do
  factory :dashboard do
    organisation
    sequence(:name) { |n| "dashboard-#{n}" }

    description   Faker::Lorem.sentence
    target_users  Faker::Lorem.sentence

    trait :published do
      published_at { 7.days.ago }
    end

    factory :dashboard_published, :traits => [:published]

    factory :dashboard_with_widgets do
      transient do
        widgets_count 1
      end

      after(:create) do |dashboard, evaluator|
        dashboard.widgets << create(:widget_hero)
        dashboard.widgets << Widget::KPIS.collect{ |n| create(:widget_with_data,
          dashboard: dashboard, name: n) }
        dashboard.widgets << create_list(:widget_with_data, evaluator.widgets_count,
          dashboard: dashboard)

        dashboard.datasets.each {|d| d.update_attributes!(:organisation_id => dashboard.organisation.id) }
        dashboard.save!
      end
    end
  end
end
