FactoryBot.define do
  factory :data_row do
    transient do
      datasets []
      value { rand(100000) }
    end

    data_table
    row_date { rand(30).months.ago }

    after(:create) do |data_row, evaluator|
      evaluator.datasets.each do |dataset|
        data_row.set_value_for dataset, evaluator.value
      end

      data_row.save if data_row.changed?
    end
  end
end
