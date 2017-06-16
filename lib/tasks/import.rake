require 'json'
require 'organisation_importer'

namespace :import do
  desc 'Imports Data'

  task update: :environment do
    orgs = { 'industry' => 3, 'dashboard' => 8 }
    run(orgs)
  end

  task data: :environment do
    ids = { 'mygov' => 1,
      'dibp'  => 2,
      'industry' => 3,
      'imports' => 4,
      'medicare-enrolment' => 6,
      'marketplace' => 7,
      'dashboard' => 8
    }

    run(ids)
  end

  def run(ids)
    ids.each do |name, id|
      puts "Importing: #{name}"
      data_json = File.read("lib/data/#{name}-data.json")
      data = JSON.parse(data_json)
      definition_json = File.read("lib/data/#{name}-definition.json")
      organisation = Dashboard.find_by(id: id)&.organisation ||
        Organisation.find_or_create_by!(name: data['agency'], url: data['url'])
      importer = OrganisationImporter.new organisation, data_json, definition_json, id
      importer.import!
    end
  end
end
