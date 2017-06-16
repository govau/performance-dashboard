class CreatePermissions < ActiveRecord::Migration[5.0]

  class Dashboard < ActiveRecord::Base
  end

  class Dataset < ActiveRecord::Base
  end

  class Permission < ActiveRecord::Base
    belongs_to :resource, polymorphic: true
    belongs_to :user

    validates :user, uniqueness: { scope: [:resource_id, :resource_type] }
  end

  class User < ActiveRecord::Base
    has_and_belongs_to_many :dashboards
    has_and_belongs_to_many :datasets

    has_many :permissions
  end

  def up
    create_table :permissions do |t|
      t.belongs_to :resource, polymorphic: true
      t.belongs_to :user
      t.timestamps
    end

    User.all.each do |user|
      user.datasets.each do |dataset|
        atts = { resource_id: dataset.id, resource_type: 'Dataset' }
        user.permissions.create! atts unless user.permissions.find_by atts
      end

      user.dashboards.each do |dashboard|
        atts = { resource_id: dashboard.id, resource_type: 'Dashboard' }
        user.permissions.create! atts unless user.permissions.find_by atts
      end
    end

    drop_table :dashboards_users
    drop_table :datasets_users
  end

  def down
    create_table :datasets_users do |t|
      t.references :dataset, null: false, index: true
      t.references :user, null: false, index: true
      t.timestamps
    end

    create_table :dashboards_users do |t|
      t.references :dashboard, null: false, index: true
      t.references :user, null: false, index: true
      t.timestamps
    end

    Permission.all.each do |permission|
      case permission.resource_type
      when 'Dashboard'
        permission.user.dashboards << permission.resource
      when 'Dataset'
        permission.user.datasets << permission.resource
      end
    end

    drop_table :permissions
  end
end
