class BackfillKpiData < ActiveRecord::Migration

  class Widget < ActiveRecord::Base
    self.inheritance_column = :_type_disabled

    has_many :dataset_widgets
    has_many :datasets, through: :dataset_widgets
    has_many :datapoints, through: :datasets

    def datapoints_around(ts)
      datapoints.within_interval_excl(ts.beginning_of_month,
        ts.advance(months: 1).beginning_of_month)
    end
  end

  class Dataset < ActiveRecord::Base
    has_many :dataset_widgets
    has_many :widgets, through: :dataset_widgets
    has_many :datapoints
  end

  class DatasetWidget < ActiveRecord::Base
    belongs_to :dataset
    belongs_to :widget
  end

  class Datapoint < ActiveRecord::Base
    belongs_to :dataset

    scope :by_time, -> { order(ts: 'ASC') }

    scope :within_interval_excl, -> (interval_start, interval_end) {
      where('ts >= ? AND ts < ?', interval_start, interval_end)
    }
  end

  def up 
    Widget.where(is_hero: true).each do |widget| 
      if ts = widget.datapoints.by_time.first&.ts
        while (dps = widget.datapoints_around(ts)).any?
          widget.datasets.each do |dataset|
            unless dps.any? {|dp| dp.dataset == dataset }
              puts "Generating for #{ts}, dataset ID #{dataset.id} (#{dataset.name})"
              Datapoint.create dataset: dataset, ts: ts, value: nil
            end
          end

          ts = ts.advance(months: 1)
        end
      end
    end
  end

  def down
  end
end
