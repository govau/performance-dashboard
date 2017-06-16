class ReorderWidgetsForGridLayout < ActiveRecord::Migration[5.0]

  class Dashboard < ActiveRecord::Base
    has_many :widgets
  end

  class Widget < ActiveRecord::Base
    self.inheritance_column = :_type_disabled
    belongs_to :dashboard
  end

  DASHBOARD_WIDGET_ORDER = {
    # myGov
    1 => [
      'New Accounts',
      'Total Accounts',
      { description: '%more than one member service%' },
      'Member Service Adoption',
      'Sign-ins per myGov Account',
      'Visits To Member Services',
      'Linked Member Services',
      'Member Services Activity',
      'Traffic source',
      { description: '%most popular browser%' },
      'Device Usage',
      'Browser types'
    ],
    # Aust Citizenship Booking Service
    2 => [
      'Devices used by users',
      { description: '%existing booking system%' },
      'Browsers used by users',
      { description: '%reschedule%' }
    ],
    # Hobby or business tool
    3 => [
      'Users who navigated to another site',
      'How users are finding the hobby or business tool',
      { description: '%the tool was helpful%' },
      'Browsers used by users',      
      'Devices used by users',
      'Users requiring help from contact centre',
      { description: '%most clicked%' }
    ],
    # Import validation 
    4 => [
      { description: '%cargo volume%' },
      'Time taken to clear permits'
    ],
    # Medicare newborn enrollment 
    6 => [
      { description: '%no longer need%' },
      'Number of newborns',
      { description: '%using the Medicare Newborn Enrolment Pilot%' },
      'Number of participating mothers',
      { description: '%new mothers eligible%' },
      'Reasons unable to participate in the trial',
      { description: '%contact details are updated%'}      
    ],
    # n.b. marketplace has no BTL charts!
    # Dash dashboard
    8 => [
      { description: '%3 primary goals%'},
      'Number of users',
      { description: '%higher levels of user engagement%'},
      'Dashboards viewed',
      'Most-visited dashboards',
      'Average session length',
      'How users find the dashboard',
      'New and returning users', 
      { description: '%statistically significant%'},
      'Types of service',
      { description: '%continuously improved%'},
      'How data is entered',
      { description: '%saved in red tape%'},
      'Red tape reduction',
      'Devices used'
    ]
  }

  def up
    DASHBOARD_WIDGET_ORDER.each do |dashboard_id, widgets|
      if dashboard = Dashboard.find_by(id: dashboard_id)
        widgets.each_with_index do |finder, idx| 
          widget = if finder.is_a? String
            dashboard.widgets.find_by name: finder 
          else
            dashboard.widgets.where('description like ?', finder[:description]).first
          end

          if widget.present?
            widget.update_attribute :pos, idx
          else
            puts "For dashboard #{dashboard.id}, could not find widget: #{finder}"
          end
        end
      else
        puts "Could not find dashboard with ID: #{dashboard_id}"
      end
    end
  end

  def down
  end
end
