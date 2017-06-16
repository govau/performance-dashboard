require 'userify'


namespace :bootstrap do
  desc "Creates an admin user"

  task :admin_user => :environment  do
    if ENV['ADMIN_EMAIL'] && ENV['ADMIN_PASSWORD']

      Userify.new(
        :org_name => 'Digital Transformation Office',
        :org_url  => 'dto.gov.au',
        :email    => ENV['ADMIN_EMAIL'],
        :password => ENV['ADMIN_PASSWORD'],
        :admin    => true
      ).create!

    end
  end

  task :sandbox_user => :environment  do

    if ENV['SANDBOX_USER']
      data = JSON.parse(ENV['SANDBOX_USER'])

      Userify.new(
        :org_name       => data['org_name'],
        :org_url        => data['org_url'],
        :email          => data['email'],
        :password       => data['password'],
        :token          => data['token'],
        :dashboard_id   => data['dashboard_id']
      ).create!

    end

  end

end
