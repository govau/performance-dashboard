#!/usr/bin/env ruby
require 'json'
require 'semantic'
require 'semantic/core_ext'
require 'optparse'
require 'active_support/core_ext/string'

PACKAGE_FILE = 'package.json'
DVK = '@gov.au/datavizkit'

options = {}

OptionParser.new { |opts|
  opts.banner = 'Convenience script to upgrade dependency.' + 
    ' Usage: bump-dep.rb [options]'

  opts.on('-d', '--dependency NAME', "Dependency to upgrade (default: #{DVK}") do |v|
    options[:dep] = v 
  end

  opts.on('-v', '--version NUM', 'Explicit version to which to upgrade' + 
      ' dependency (default behaviour: increment patch number)') do |v|
    options[:ver] = v 
  end
}.parse!

dep_name = options[:dep] || DVK
package = JSON.parse File.read PACKAGE_FILE
version_string = package['dependencies'][dep_name]
version = nil

raise "Dependency #{dep_name} not found" unless version_string.present?

version = if options.has_key? :ver
  options[:ver].to_version
else
  version_string.gsub(/[^.\d]/, '').to_version.increment! :patch
end

package['dependencies'][dep_name] = "^#{version.to_s}"
File.write PACKAGE_FILE, JSON.pretty_generate(package)

system('yarn install') && puts("Upgraded #{dep_name} to #{version.to_s}")
