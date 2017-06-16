require 'userify'

Userify.new(
  :org_name => 'Digital Transformation Office',
  :org_url  => 'dto.gov.au',
  :email    => 'dev@localhost',
  :password => 'password',
  :admin    => true
).create!
