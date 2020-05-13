FactoryBot.define do
  factory :data_table do
    transient do
      datasets_count 1
      rows_count 0
      rows_date_start 5.years.ago
    end

    dashboard

    after(:create) do |data_table, evaluator|
      data_table.datasets << create_list(:dataset, evaluator.datasets_count)

      evaluator.rows_count.times do |idx|
        date = evaluator.rows_date_start + idx.months
        create(:data_row, data_table: data_table, datasets: data_table.datasets,
          row_date: date)
      end
    end
  end
end
