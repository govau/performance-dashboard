echo "{
  \"deployment\": {
    \"revision\": \"$CIRCLE_SHA1\",
    \"changelog\": \"$CIRCLE_BUILD_URL\",
    \"description\": \"$CIRCLE_BUILD_URL\",
    \"user\": \"circleci\"
  }
}"

curl -X POST 'https://api.newrelic.com/v2/applications/25255438/deployments.json' \
     -H 'X-Api-Key:$NEW_RELIC_API_KEY' -i \
     -H 'Content-Type: application/json' \
     -d \
"{
  \"deployment\": {
    \"revision\": \"$CIRCLE_SHA1\",
    \"changelog\": \"$CIRCLE_BUILD_URL\",
    \"description\": \"$CIRCLE_BUILD_URL\",
    \"user\": \"circleci\"
  }
}"
