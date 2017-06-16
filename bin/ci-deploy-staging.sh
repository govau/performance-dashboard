#!/bin/bash

# Exit immediately if any commands return non-zero
set -e

# Output the commands we run
set -x

# Update the blue app
cf unmap-route dashboard-staging-blue apps.staging.digital.gov.au -n dashboard
cf push dashboard-staging-blue -f staging-manifest.yml
cf map-route dashboard-staging-blue apps.staging.digital.gov.au -n dashboard

# Update the green app
cf unmap-route dashboard-staging-green apps.staging.digital.gov.au -n dashboard
cf push dashboard-staging-green -f staging-manifest.yml
cf map-route dashboard-staging-green apps.staging.digital.gov.au -n dashboard
