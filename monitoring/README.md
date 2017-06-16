# Table of Contents
  * [Site Monitoring](#site-monitoring)
  * [Sensu Basics](#sensu-basics)
  * [Local Development and Testing](#local-development-and-testing)
    * [Setting up the monitoring agent](#setting-up-the-monitoring-agent)
    * [Running the Monitoring agent locally](#running-the-monitoring-agent-locally)
  * [Example checks](#example-checks)
  * [CI/CD](#CI/CD)
  


Site Monitoring
=============== 
The following code is used to deploy an agent for monitoring a service, site or system.  
The monitoring makes use of the [Sensu](https://sensuapp.org/) framework.  
Each project will deploy 1 or more sensu-client agents to monitor their service


Sensu basics
============
The Sensu stack includes the following components.

* **_rabbitMQ_** (transport) - message bus for sensu-clients and sensu-servers to connect to.  check requests and results are published to the messages bus.
* **_redis_** (data store) - stores client registry, check history, event registry
* **_sensu-client_** (monitoring agent) - schedules and executes local check scripts/commands to monitor external (or local) resources
* **_sensu-server_** (event processor) - processes event data from sensu-client check results and takes actions.
* **_sensu-api_** (RESTful) - provides access to monitoring data
* **_dashboard_** - view the real-time state of sensu-clients and check results.

![Alt text](./sensu-architecture.png?raw=true "Sensu Architecture")

Teams need only concern themselves with the **sensu-client** which will run their desired checks.



Local Development and Testing
=============================
To perform local testing you require **Docker Engine** and **Docker compose** to be installed locally.  

For users running on Windows or OS-X, the easiest way to get up and running is with the [Docker Toolbox](https://www.docker.com/products/docker-toolbox).  

Setting up the Monitoring agent
-------------------------------
* The `Dockerfile` describes how to build the container image used to monitor systems.  It includes the installation and basic setup of sensu-client which you probably wont need to adjust.  
* Teams can further customise their `Dockerfile` if their check scripts require additional dependant software or libraries in order to execute.  
* The configuration for the sensu checks is stored in the `files/sensu-conf.d` folder.  The `Dockerfile` copies the contents of the into the container image during a build.  Teams should customise these scripts to run the desired commands at the desired frequency.  

Below is a simple sensu check definition.  

```
{
  "checks": {
    "dto.gov.au_pageresponse": {
      "handlers": ["default"],
      "command": "/opt/sensu/embedded/bin/check-http.rb --timeout 5 --url https://www.dto.gov.au --response-code 200",
      "interval": 10,
      "standalone": true
    }
  }
}
```

This sensu check runs every 10 seconds and checks whether the DTO website responds with a `200` response code.   
_note: `check-http.rb` is provided by the `sensu-plugins-http` which is installed via the `Dockerfile`._  

The Sensu check specification can be found [here](https://sensuapp.org/docs/latest/checks#sensu-check-specification).

Running the Monitoring agent locally
------------------------------------
The `docker-compose.yml` file is used by **docker-compose** to stand-up a 2 container system.  

 1. **sensu-server** container ausdto/  
 	(includes rabbitmq, redis, sensu-server, sensu-api and Uchiwa Dashboard).
 2. **sensu-client** agent that runs desired checks and tests for the project/team.
 
Build the sensu-client 

```
$ docker-compose -f docker-compose.yml build
sensu-server uses an image, skipping
Building gov-au
Step 1 : FROM ubuntu
 ---> b549a9959a66
Step 2 : MAINTAINER Michael Richardson <michael@michaelandhelen.com>
 ---> Using cache
 ---> 24efca879a56
Step 3 : RUN apt-get update && apt-get upgrade -y && apt-get install -y wget
 ---> Using cache
 ---> 5b334c1081a1
...
...
...
Step 11 : CMD /go.sh
 ---> Running in 2ba36a63bc15
 ---> cf918ddfa7fc
Removing intermediate container 2ba36a63bc15
Successfully built cf918ddfa7fc
```

Run it locally

```
$ docker-compose -f docker-compose.yml up
Starting govau_sensu-server_1
Recreating govau_gov-au_1
Attaching to govau_sensu-server_1, govau_gov-au_1
sensu-server_1 | running confd with environment variables
sensu-server_1 | 2016-05-09T01:09:37Z 8afe249f9999 /usr/bin/confd[6]: INFO Backend set to env
sensu-server_1 | 2016-05-09T01:09:37Z 8afe249f9999 /usr/bin/confd[6]: INFO Starting confd
sensu-server_1 | 2016-05-09T01:09:37Z 8afe249f9999 /usr/bin/confd[6]: INFO Backend nodes set to
sensu-server_1 | launching supervisor
gov-au_1       | 2016-05-09T01:09:37Z gov-au /usr/bin/confd[5]: INFO Backend set to env
gov-au_1       | 2016-05-09T01:09:37Z gov-au /usr/bin/confd[5]: INFO Starting confd
gov-au_1       | 2016-05-09T01:09:37Z gov-au /usr/bin/confd[5]: INFO Backend nodes set to
gov-au_1       | 2016-05-09T01:09:37Z gov-au /usr/bin/confd[5]: INFO Target config /etc/sensu/conf.d/client.json out of sync
gov-au_1       | 2016-05-09T01:09:37Z gov-au /usr/bin/confd[5]: INFO Target config /etc/sensu/conf.d/client.json has been updated
...
...
...
...
```

Browse to the dashboard to view the results of the check script.  

 * The URL is [http://localhost:3000](http://localhost:3000) if running locally on linux.
 * If using virtual-box with docker-machine, the ip address can be discovered by running `docker-machine ls`.  it is typically [http://192.168.99.100:3000](http://192.168.99.100:3000).
 * Default dashboard credentials are `sensu`/`sensu`


![Alt text](./sensu-dashboard.png?raw=true "Sensu Dashboard")

 
---
 
Example checks
==============
There are a number of great sources for sensu compatible checks.  Here are 2 recommended.

1. http://sensu-plugins.io/
2. nagios-plugins (`apt-get install nagios-plugins`)

Here are some basic suggested checks that teams could use.

* Monitor validity and expiry date of SSL certificate.  (source [https://github.com/sensu-plugins/sensu-plugins-http](https://github.com/sensu-plugins/sensu-plugins-http))  
`/opt/sensu/embedded/bin/check-https-cert.rb --url https://www.dashboard.gov.au --critical 15 --warning 30`
* Monitor response codes for url (source [https://github.com/sensu-plugins/sensu-plugins-http](https://github.com/sensu-plugins/sensu-plugins-http))  
`/opt/sensu/embedded/bin/check-http.rb --timeout 5 --url https://www.gov.au/alpha/ --response-code 200`
* Check for desired redirects  (source [https://github.com/sensu-plugins/sensu-plugins-http](https://github.com/sensu-plugins/sensu-plugins-http))  
`/opt/sensu/embedded/bin/check-http.rb --timeout 5 --url http://gov.au/alpha --redirect-to https://www.gov.au/alpha`



CI/CD
=====
Monitoring containers are built and deployed by Circle-CI via the following scripts.

 * `./bin/ci-monitor-build.sh` (build docker image and push to registry)
 * `./bin/ci-monitor-deploy.sh` (deploy/upgrade containers running in ECS)
 
Currently the monitoring containers are running in AWS ECS (us-east-1 region).

