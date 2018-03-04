# Dashboard


[![CircleCI](https://circleci.com/gh/govau/performance-dashboard/tree/master.svg?style=svg)](https://circleci.com/gh/govau/performance-dashboard/tree/master)

[![Code Climate](https://codeclimate.com/github/govau/performance-dashboard/badges/gpa.svg)](https://codeclimate.com/github/govau/performance-dashboard)

[![Issue Count](https://codeclimate.com/github/govau/performance-dashboard/badges/issue_count.svg)](https://codeclimate.com/github/govau/performance-dashboard)

[![Test Coverage](https://codeclimate.com/github/govau/performance-dashboard/badges/coverage.svg)](https://codeclimate.com/github/govau/performance-dashboard/coverage)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


Version 3.0 of the Performance Dashboard.

Currently WIP.


## Requirements

 - Ruby: see `.ruby-version`
 - Postgres 9.4
 - Node: see `package.json` > `engines.node`
 - Yarn ^0.16.1
 - ImageMagick

## Getting Started

### Database

The default database config assumes you have installed Postgres via Homebrew.
You should need no further config.

Otherwise, create a `.env` file in the Rails directory and populate with the relevant credentials.

```
DB_HOST = '127.0.0.1'
DB_USER_NAME = 'dashboard'
DB_PWD = 'password'
GA_UA_CODE = 'UA-61222473-3'
```

If you don't have Bundler installed
```
gem install bundler
```

Install project gems, run
```
bundle install
```

To create the database and load the schema
```
rake db:setup
```

Migrate the database

```
rake db:migrate
```

Import the dashboard data

```
rake import:data
```

(Optional) If you need to hard reset the database

```
rake db:drop db:create db:migrate import:data
```

Create seed data for accessing the portal

```
rails db:seed
```

You will now be able to login to the portal in the development environment with

```
:email => 'dev@localhost'
:password => 'password'
```

### Run the App

Before running for the first time, run `yarn build` to generate the front end assets

To run on the default port (3000)
```
rails server
```

The site can now be viewed at `http://localhost:3000/`

Administration is available at `http://localhost:3000/admin`

The editor is available at `http://localhost:3000/editor`

### Mail

To test mail in development, we're using mailcatcher.

Once installed, mail can be viewed at
[http://localhost:1080/](http://localhost:1080/)


### Commiting to Git

Before hand:

Commit messages follow commitizen standards: http://commitizen.github.io/cz-cli/
Although this is optional, normal committing will still work.

```
yarn run commit
```

If you want to shorthand this, you could install Commitizen globally following instructions here http://commitizen.github.io/cz-cli/ and ensure that your global "path" value matches "config.commitizen.path" in package.json.


### Front end

#### TLDR

```
yarn install
yarn build
```

#### Getting started

Make sure you have Yarn installed globally.  Refer to
https://yarnpkg.com/en/docs/install.

Install the pipeline and all the project dependencies:

```
yarn install
```

Build the assets

```
yarn build
```

That's it.


#### Need Develop mode?

To develop on assets, instead of just building them, toggle `DEV_SERVER = true`
inside `/.env` and restart Rails. Then run the development server:

```
yarn run start
```

It might be useful to also install these Chrome Extensions to help you work:

* Redux Dev Tools:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

More information here: http://zalmoxisus.github.io/redux-devtools-extension/


* React Developer Tools:
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi


#### Run Frontend Test?

```
yarn run test
```

or singular like:

```
yarn run test:react -- datapointsReducer
```

set a debugger in test

```
NODE_ENV=test node --debug-brk --inspect ./node_modules/.bin/jest -i --runInBand --verbose --env=jsdom --watch
```


#### Run Style Guide?

```
yarn run storybook
```

#### Deploy Style Guide?

```
yarn run deploy-storybook
```

#### View Style Guide?

http://performance-dashboard-ui.surge.sh/


#### Issues with npm

```
rm -rf node_modules
npm cache clean
yarn install
```

#### Point an npm module to a local directory like datavizkit

During development, use a local copy of required dependencies rather than the npm dependency.


1. Fork and clone the repository outside of performance-dashboard. like this:

```
Sites
├── datavizkit
├── performance-dashboard
└── react-uikit
```

2. Install [linklocal](https://github.com/timoxley/linklocal) as a global module
`npm install -g linklocal`

3. Navigate back to root of this project
`$ cd performance-dashboard`

3. Use linklocal to create sym links to the local directory
`linklocal --named -r @gov.au/datavizkit datavizkit ../`

4. Prove that it worked:
`$ ls -al node_modules/@gov.au`

should see:
`datavizkit -> ../../../datavizkit`

4. Unlink at any time
`linklocal unlink -- datavizkit node_modules/@gov.au/datavizkit`
`yarn add @gov.au/datavizkit`

5. Update the linked package main file so it reads from dev source rather than from lib:

`@gov.au/datavizkit/package.json`

change:

```
"main": "lib/Datavizkit.js"
```

to

```
"main": "src/Datavizkit.js"
```

(if you had been running build tasks, you will need to restart those).

(be careful not to commit it :) )


## Tests

```
bundle exec rspec
```

Run specs without the features (features use a browser and Capybara so can be much slower)

```
bundle exec rspec --exclude-pattern "features/**"
```

https://dashboard.gov.au/api/1/dashboards/1-mygov-dashboard

You can also use guard to run specs automatically on save with

```
bundle exec guard
```

When running under guard, it can be useful to isolate a specific test.
This can be achieved by using `:focus => true` on the desired spec.

```
it 'authenticates', :focus => true do
end
```

Remember to NOT commit this as it will mean the test suite no longer runs all the tests.

For advice for writing specs check [betterspecs](http://betterspecs.org/).


## Api documentation

https://swaggerhub.com/api/dto/dto-dashboard/v1


## High-level Development Process

## TL;DR​

1. Branch

2. PR

3. Review

4. Merge



### Branch Often.

 All work should be on a branch.

 Rebase long-living branches often (on master).


 ### Branch Naming Conventions

 For extra points name the branch to annotate the type of work and ticket number being resolved.
 ​
 Examples;
 ​

 - `fix/477-broken-redirects-for-guests`

 - `feature/502-new-cart-logo`

 - `ops/808-cloud-66-postgres-tweaks`

 ​

 #### Types of branches

 ​
 ```

 feature -> feature

 fix     -> fix

 ops     -> infrastructure / ops related changes

 test    -> adding missing tests

 tweak   -> small changes, refactors

 doc     -> documentation

 ```

 ## PR

 - Merges should be managed using a Pull Request

 - Before finishing a PR, rebase on master

 - Create the PR early and label as `WIP`

### Feature flags

We use the [Flipper](https://github.com/jnunemaker/flipper) feature flags
system to turn features on and off. Currently the features that can be toggled
are `auth` (authentication) and `two_factor` (two-factor authentication).

To manage features, log in as an admin user and visit the `/flipper` path.

Note that it is possible for an admin user to lock out all users (including
him/herself) by switching off the `auth` feature. To escape from this scenario,
simply add an environment variable `FORCE_AUTH_FEATURE` with any truthy
value and restart the server. This will automatically switch the `auth` flag
back on. (You then should remove the environment variable.)

### Two Factor Authentication

By default, this is disabled in the development environment.

To enable, first ensure that an encryption key is present in your `.env` file
(To generate an appropriately random string, you can use `rails secret`).

```
OTP_SECRET_ENCRYPTION_KEY={RANDOM_STRING}
```

Then enable the `two_factor` flag (for everyone) using Flipper (see the
'Feature flags' section above).

You can also Flipper to disable two-factor authentication.

### Rebasing

Rebasing before merging a PR ensures a clean commit history, please see [Merging vs Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing/) for more details.

If rebasing often, its a good idea to use `rerere`, see:
[Fix conflicts only once with git rerere](https://medium.com/@porteneuve/fix-conflicts-only-once-with-git-rerere-7d116b2cec67)

If your branch is long-lived (longer than a day on an active codebase), its a good idea to periodically rebase so you are actively tracking changes in master. This makes merge conflicts 1) less likely and 2) smaller and easier to deal with.

Merge conflicts need to be carefully resolved as part of the rebase process. A tool like git-tower can be useful.



### Review


 - At least one other person should review the PR before merge.

 - A review should ideally involve actually checking out and running the code, and sanity checking it before merge.

 - Close any related issues​ in Jira


### Coding Standard/s

[Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide)


## Environments
- [Staging](https://dashboard-staging.apps.y.cld.gov.au/)
- [Production](https://dashboard.gov.au/)
- [Style Guide](http://performance-dashboard-ui.surge.sh/)


## Deployment

Circle CI will deploy automatically once tests have passed:

  - Staging tracks the `master` branch
  - Production tracks tags in the form `rel-{timestamp}`

Note: for non-production servers, there is a bunch of JSON data
(see `lib/data/*.json`) that is used to populate the dashboards on every
deployment. On production, use the editor to add new data to dashboards, or
use the import function in the admin section to create new dashboards via JSON.

## CloudFoundry

The environment variables for our CloudFoundry instances are managed using a
User Provided Service. If you want to add, remove or change an environment
variable, use the `cf update-service` command. For production, you will want to
manage the `dashboard-ups` service; for non-prod servers, use the
`dashboard-staging` service. See the CloudFoundry CLI documentation for more
details: http://docs.cloudfoundry.org/cf-cli/

Note that if you want to deploy your own instances manually, you will need to
specify the `manifest-staging.yml` manifest, e.g.:

```
cf push dashboard-ad-hoc -f manifest-staging.yml
```

### Production

To tag a release for deployment to production:

```
git tag `date "+release-%Y%m%d%H%M%S"` && git push --tags
```

#### Rollback

If an error occurs or the release needs to be rolled back for any reason, the simplest way is to tag a new release from the last release.

For example, given two releases `release-20160101` and `release-20160102`.

If we decide to roll back to the earlier release, we would simply:

```
git checkout -b release-20160101
git tag `date "+release-%Y%m%d%H%M%S"` && git push --tags
```

The checkout will create a new branch from the tag, which can be useful for diagnosing regression errors.
