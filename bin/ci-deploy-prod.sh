#!/usr/bin/env bash

# Exit immediately if there is an error
set -e

# cause a pipeline (for example, curl -s http://sipb.mit.edu/ | grep foo) to produce a failure return code if any command errors not just the last command of the pipeline.
set -o pipefail

# echo out each line of the shell as it executes
set -x

# Update the blue app
update_blue() {
  cf unmap-route dashboard-blue dashboard.gov.au
  cf unmap-route dashboard-blue www.dashboard.gov.au
  cf unmap-route dashboard-blue dashboard.cool
  cf push dashboard-blue
  cf map-route dashboard-blue dashboard.gov.au
  cf map-route dashboard-blue www.dashboard.gov.au
  cf map-route dashboard-blue dashboard.cool
}

# Update the green app
update_green() {
  cf unmap-route dashboard-green dashboard.gov.au
  cf unmap-route dashboard-green www.dashboard.gov.au
  cf unmap-route dashboard-green dashboard.cool
  cf push dashboard-green
  cf map-route dashboard-green dashboard.gov.au
  cf map-route dashboard-green www.dashboard.gov.au
  cf map-route dashboard-green dashboard.cool
}

main() {
  update_blue
  update_green
}

main $@

