#!/bin/bash

# Exit immediately if any commands return non-zero
set -e

# Output the commands we run
set -x

cf push dashboard-dev -f staging-manifest.yml
