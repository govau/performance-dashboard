source 'https://rubygems.org'
ruby '2.4.4'

# https://github.com/bundler/bundler/blob/master/lib/bundler/dsl.rb#L263
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.6'
gem 'pg'
gem 'puma', '~> 3.8'

# gem 'jquery-rails'
gem 'activeadmin', github: 'activeadmin'
gem 'active_model_serializers', '~> 0.10.0'
gem 'cancancan',                '~> 1.10'
gem 'devise', github: 'micapam/devise', ref: 'a2afb7b3'
gem 'draper',                   '> 3.x'
gem 'erubis'
gem 'inherited_resources', github: 'activeadmin/inherited_resources'
gem 'jquery-rails'
gem 'redcarpet',                '~>3.3'
gem 'sass-rails',               '~> 5.0'
gem 'turbolinks',               '~> 5'
gem 'uglifier',                 '>= 1.3.0'
gem 'jbuilder',                 '~> 2.6.1'
gem 'two_factor_authentication', github: 'Houdini/two_factor_authentication'
gem 'rqrcode-rails3', github: 'micapam/rqrcode-rails3'
gem 'mini_magick'
gem 'devise_invitable'
gem 'maildown'
gem 'flipper', github: 'jnunemaker/flipper'
gem 'flipper-ui', github: 'jnunemaker/flipper'
gem 'flipper-api', github: 'jnunemaker/flipper'
gem 'csv_shaper',               '~> 1.3.0'
gem 'actionpack-page_caching', github: 'rails/actionpack-page_caching', ref: '0ab22eab6d81ec8e38e5e1ed16319770d0001ea9'
gem 'json-schema', '~> 2.8'
gem 'audited', '~> 4.3'
gem 'rails-observers', github: 'rails/rails-observers'
gem 'activerecord-session_store'
gem 'storext', '~> 2.2'
gem 'rollbar', '~> 2.19.2'
gem 'semantic', '~> 1.6.0'
gem 'rinku', '~> 2.0'
gem 'cf-app-utils'

group :production do
  gem 'rails_12factor'
end

group :assets do
   gem 'coffee-rails'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'dotenv-rails'
end

group :development do
  gem "binding_of_caller"
  gem "better_errors"
  gem "letter_opener"
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console'
end

group :test do
  gem 'capybara', '~> 2.8.1'
  gem 'database_cleaner'
  gem 'factory_girl_rails', '~> 4.0'
  gem 'faker'
  gem 'guard-rspec', require: false
  gem 'poltergeist'
  gem 'rspec-rails'
  gem 'rspec-collection_matchers'
  gem 'rspec-its'
  gem 'rails-controller-testing'
  gem 'rspec_junit_formatter'
  gem 'selenium-webdriver', '~> 2.53.4'
  gem 'rubyzip', '>= 1.2.2'
  gem 'shoulda-matchers', '~> 3.1'
  gem 'codecov', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
