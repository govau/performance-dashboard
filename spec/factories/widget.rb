FactoryBot.define do
  factory :widget do
    dashboard
    sequence(:name) { |n| "widget-#{n}" }
    description       Faker::Lorem.sentence
    size              'medium'
    type              'bar'
    units             'n'
    row               0
    pos               0
    is_hero           false
    last_updated_at   { rand(100).hours.ago }

    factory :widget_with_data do
      transient do
        datasets_count 1
        rows_count 10
      end

      after(:create) do |widget, evaluator|
        widget.data_table = create(:data_table, dashboard: widget.dashboard,
          rows_count: evaluator.rows_count,
          datasets_count: evaluator.datasets_count)

        widget.save

        widget.data_table.datasets.each do |dataset|
          widget.datasets << dataset
        end

        widget.save!
      end

      factory :widget_hero do
        is_hero true
      end
    end
  end
end
