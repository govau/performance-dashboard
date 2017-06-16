// todo - rehydrate!!

export default {
  "currentUser": {
    "id": 1,
    "email": "dev@localhost",
    "token": "0f589a36911c4012a084f6d3223c20daefe274ed00b34b22a6f270a1d91a6cfc"
  },
  "dashboards": [{
    "id": 2,
    "name": "Australian Citizenship Appointment Booking Service",
    "description": "Description",
    "notes": [{
      "title": "Where is this information from?",
      "body": "Department of Immigration and Border Protection."
    }, {
      "title": "What is Australian Citizenship Appointment Booking Service?",
      "body": "The Australian Citizenship Appointment Booking Service makes it quicker, easier and more convenient for users to reschedule a citizenship test appointment. Prior to the introduction of the online service, users were only able to change their appointment by calling the Department. The public beta release of the service is currently available in Melbourne, Victoria."
    }, {
      "title": "User satisfaction",
      "body": "User satisfaction measures the percentage of users who responded \"satisfied\" and \"very satisfied\" with the appointment booking service using the feedback kiosks located in the Department’s citizenship areas."
    }, {"title": "Cost per transaction", "body": "This data is not available."}, {
      "title": "Digital take-up",
      "body": "Digital take-up measures the number of users who had an appointment booked using the new service as a percentage of all appointments that have been made Australia-wide."
    }, {
      "title": "Completion rate",
      "body": "Completion rate measures the number of users who were able to use the digital service without having to contact the Department for assistance when rescheduling their appointment."
    }],
    "url": "https://www.border.gov.au/",
    "target_users": "Users",
    "display_hero": true,
    "display_kpis": true,
    "published_at": "2017-02-06T02:03:47.606Z"
  }, {
    "id": 3,
    "name": "Hobby or Business Tool",
    "description": "This public beta release of the tool is for people who are getting money or intend to get money from creative works, and are unsure if they are a hobby or a business. The tool guides them on their government obligations.",
    "notes": [{
      "title": "What is the Hobby or Business Help Me Work It Out Tool?",
      "body": "This public beta release of the tool is for people who are getting money or intend to get money from creative works, and are unsure if they are a hobby or a business. The tool guides them on their government obligations."
    }, {
      "title": "Who is the user group of the Hobby or Business Help Me Work It Out Tool?",
      "body": "The first release applies to artists, creatives and makers. Future enhancements to the tool, building on the public beta, will add new user groups, and over time, the digital take-up figure will reflect the increasing number of users who are able to use it."
    }, {
      "title": "User satisfaction",
      "body": "User satisfaction measures the percentage of users who responded “yes” to finding the service useful in the feedback survey as compared to the total number of respondents."
    }, {
      "title": "Cost per transaction",
      "body": "We do not have this data at the moment because we are currently in the process of determining the best way to measure Cost per transaction for information services."
    }, {
      "title": "Digital take-up",
      "body": "Digital take-up measures the percentage of visitors to the page on business.gov.au, where the tool can be found, who go on to use it. The percentage is calculated by comparing the total number of users who access the public beta tool to the total number of unique visits to the page on business.gov.au. We are working on a more precise measure of take-up, comparing use of the tool to users accessing this information through our contact centre. We will update the Dashboard in the near future with this data."
    }, {
      "title": "Completion rate",
      "body": "Completion rate measures the percentage of users who successfully generate a result by using the public beta release of the tool. This percentage is calculated by dividing the total number of successfully completed interactions by the total number of started interactions."
    }],
    "url": "https://start.business.gov.au/",
    "target_users": "The first release applies to artists, creatives and makers. Future enhancements to the tool, building on the public beta, will add new user groups, and over time, the Digital take-up figure will reflect the increasing number of users who are able to use it.",
    "display_hero": true,
    "display_kpis": true,
    "published_at": "2017-02-06T02:03:48.079Z"
  }],
  "widgets": [{
    "id": 18,
    "dashboard_id": 2,
    "row": 1,
    "pos": 0,
    "name": "User satisfaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Overall satisfaction score includes all ratings weighted from 100% for very satisfied to 0% for very dissatisfied",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:47.640Z",
    "datasets": [41]
  }, {
    "id": 19,
    "dashboard_id": 2,
    "row": 1,
    "pos": 1,
    "name": "Cost per transaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "$",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": [42]
  }, {
    "id": 20,
    "dashboard_id": 2,
    "row": 1,
    "pos": 2,
    "name": "Digital take-up",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:47.708Z",
    "datasets": [44]
  }, {
    "id": 21,
    "dashboard_id": 2,
    "row": 1,
    "pos": 3,
    "name": "Completion rate",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Percentage of transactions made using the digital service.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:47.678Z",
    "datasets": [43]
  }, {
    "id": 22,
    "dashboard_id": 2,
    "row": 2,
    "pos": 1,
    "name": "Devices used by users",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "This shows the types of devices used by users to access the appointment booking service.",
    "options": {"displayRoundedData": true, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:47.739Z",
    "datasets": [45, 46, 47]
  }, {
    "id": 23,
    "dashboard_id": 2,
    "row": 3,
    "pos": 0,
    "name": "Browsers used by users",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "This shows the types of browsers used by users to access the appointment booking service.",
    "options": {"displayRoundedData": true, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:47.823Z",
    "datasets": [48, 49, 50, 51, 52]
  }, {
    "id": 24,
    "dashboard_id": 2,
    "row": 3,
    "pos": 1,
    "name": "Fact",
    "type": "fact",
    "size": "medium",
    "units": "n",
    "description": "Prior to the digital transformation clients could only reschedule a citizenship test appointment to a more suitable time by calling the Department.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": []
  }, {
    "id": 25,
    "dashboard_id": 2,
    "row": 2,
    "pos": 0,
    "name": "Fact",
    "type": "fact",
    "size": "medium",
    "units": "n",
    "description": "The Appointment Booking Service was developed to replace the Department’s existing booking system. User research found that users wanted a more efficient and effective way to reschedule their citizenship test appointment to a time and/or day that better suited them. ",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": []
  }, {
    "id": 26,
    "dashboard_id": 2,
    "row": 0,
    "pos": 0,
    "name": "Kpis",
    "type": "full",
    "size": "extra-large",
    "units": "n",
    "description": null,
    "options": {},
    "is_hero": true,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:47.640Z",
    "datasets": [41, 42, 44, 43]
  }, {
    "id": 27,
    "dashboard_id": 3,
    "row": 0,
    "pos": 0,
    "name": "Kpis",
    "type": "full",
    "size": "extra-large",
    "units": "n",
    "description": null,
    "options": {},
    "is_hero": true,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:48.100Z",
    "datasets": [53, 54, 56, 55]
  }, {
    "id": 28,
    "dashboard_id": 3,
    "row": 1,
    "pos": 0,
    "name": "User satisfaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Overall satisfaction score includes all ratings weighted from 100% for very satisfied to 0% for very dissatisfied",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:48.100Z",
    "datasets": [53]
  }, {
    "id": 29,
    "dashboard_id": 3,
    "row": 1,
    "pos": 1,
    "name": "Cost per transaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "$",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": [54]
  }, {
    "id": 30,
    "dashboard_id": 3,
    "row": 1,
    "pos": 2,
    "name": "Digital take-up",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:48.134Z",
    "datasets": [56]
  }, {
    "id": 31,
    "dashboard_id": 3,
    "row": 1,
    "pos": 3,
    "name": "Completion rate",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Percentage of transactions made using the digital service.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:48.119Z",
    "datasets": [55]
  }, {
    "id": 32,
    "dashboard_id": 3,
    "row": 2,
    "pos": 0,
    "name": "Users who navigated to another site",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "This shows the percentage of users who click through to an external website from the Hobby or Business tool. Please note that these figures represent aggregated clicks to external government sites.",
    "options": {"displayRoundedData": false, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:48.157Z",
    "datasets": [58, 57, 59, 60, 61]
  }, {
    "id": 33,
    "dashboard_id": 3,
    "row": 2,
    "pos": 1,
    "name": "How users are finding the hobby or business tool",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "This shows the percentage of visits to the tool that came directly from business.gov.au or other external sites ie government, private sector or social media.",
    "options": {"displayRoundedData": true, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:48.283Z",
    "datasets": [62, 63]
  }, {
    "id": 34,
    "dashboard_id": 3,
    "row": 3,
    "pos": 1,
    "name": "Users requiring help from contact centre",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "This shows number of users who sought help from the contact centre about the Hobby or Business tool as a percentage of overall number of visits to business.gov.au.",
    "options": {"displayRoundedData": false, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:48.312Z",
    "datasets": [65, 64]
  }, {
    "id": 35,
    "dashboard_id": 3,
    "row": 4,
    "pos": 0,
    "name": "Devices used by users",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "This shows the types of devices used by users to access the Hobby or Business tool.",
    "options": {"displayRoundedData": true, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:48.345Z",
    "datasets": [66, 67, 68]
  }, {
    "id": 36,
    "dashboard_id": 3,
    "row": 4,
    "pos": 1,
    "name": "Browsers used by users",
    "type": "line",
    "size": "medium",
    "units": "%",
    "description": "This shows the types of browsers used by users to access the Hobby or Business tool.",
    "options": {"displayRoundedData": true},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": "2017-02-06T02:03:48.388Z",
    "datasets": [69, 70, 71, 72, 73]
  }, {
    "id": 37,
    "dashboard_id": 3,
    "row": 3,
    "pos": 0,
    "name": "Fact",
    "type": "fact",
    "size": "extra-small",
    "units": "f",
    "description": "85% of users who received a business or hobby result thought the tool was helpful.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": []
  }, {
    "id": 38,
    "dashboard_id": 3,
    "row": 3,
    "pos": 2,
    "name": "Fact",
    "type": "fact",
    "size": "extra-small",
    "units": "n",
    "description": "The ATO page \"Income you must declare\" is the most clicked obligation link on the results page.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-11-09T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": []
  }],
  "datasets": [{
    "id": 1,
    "name": "User satisfaction",
    "label": "User satisfaction",
    "units": "n",
    "notes": null,
    "updated_at": "2017-02-06T02:03:44.299Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 2,
    "name": "Cost per transaction",
    "label": "Cost per transaction",
    "units": "$",
    "notes": "",
    "updated_at": "2017-02-06T02:03:44.302Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 3,
    "name": "Digital take-up",
    "label": "Digital take-up",
    "units": "%",
    "notes": null,
    "updated_at": "2017-02-06T02:03:44.303Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 4,
    "name": "Completion rate",
    "label": "Completion rate",
    "units": "%",
    "notes": null,
    "updated_at": "2017-02-06T02:03:44.305Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 5,
    "name": "Chrome",
    "label": "Browser Usage - Chrome",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:44.306Z",
    "data_updated_at": "2017-02-06T02:03:44.377Z",
    "datapoints": [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  }, {
    "id": 6,
    "name": "Browser Usage - Safari",
    "label": "Safari",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:44.379Z",
    "data_updated_at": "2017-02-06T02:03:44.417Z",
    "datapoints": [22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]
  }, {
    "id": 7,
    "name": "Browser Usage - Mozilla",
    "label": "Mozilla",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:44.419Z",
    "data_updated_at": "2017-02-06T02:03:44.461Z",
    "datapoints": [33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23]
  }, {
    "id": 8,
    "name": "Browser Usage - IE",
    "label": "IE",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:44.462Z",
    "data_updated_at": "2017-02-06T02:03:44.499Z",
    "datapoints": [44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34]
  }, {
    "id": 9,
    "name": "Browser Usage - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:44.500Z",
    "data_updated_at": "2017-02-06T02:03:44.534Z",
    "datapoints": [55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45]
  }, {
    "id": 10,
    "name": "Web Traffic Source - humanservices.gov.au",
    "label": "humanservices.gov.au",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:44.535Z",
    "data_updated_at": "2017-02-06T02:03:44.635Z",
    "datapoints": [86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56]
  }, {
    "id": 11,
    "name": "Web Traffic Source - Direct",
    "label": "Direct",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:44.636Z",
    "data_updated_at": "2017-02-06T02:03:44.739Z",
    "datapoints": [117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87]
  }, {
    "id": 12,
    "name": "Web Traffic Source - ato.gov.au",
    "label": "ato.gov.au",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:44.740Z",
    "data_updated_at": "2017-02-06T02:03:44.852Z",
    "datapoints": [148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118]
  }, {
    "id": 13,
    "name": "Web Traffic Source - Google",
    "label": "Google",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:44.854Z",
    "data_updated_at": "2017-02-06T02:03:44.964Z",
    "datapoints": [179, 178, 177, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150, 149]
  }, {
    "id": 14,
    "name": "Web Traffic Source - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:44.966Z",
    "data_updated_at": "2017-02-06T02:03:45.076Z",
    "datapoints": [210, 209, 208, 207, 206, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 181, 180]
  }, {
    "id": 15,
    "name": "Linked Accounts - 1 service",
    "label": "1 service",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:45.077Z",
    "data_updated_at": "2017-02-06T02:03:45.156Z",
    "datapoints": [231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 211]
  }, {
    "id": 16,
    "name": "Linked Accounts - 2 services",
    "label": "2 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:45.158Z",
    "data_updated_at": "2017-02-06T02:03:45.244Z",
    "datapoints": [252, 251, 250, 249, 248, 247, 246, 245, 244, 243, 242, 241, 240, 239, 238, 237, 236, 235, 234, 233, 232]
  }, {
    "id": 17,
    "name": "Linked Accounts - 3 services",
    "label": "3 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:45.245Z",
    "data_updated_at": "2017-02-06T02:03:45.318Z",
    "datapoints": [273, 272, 271, 270, 269, 268, 267, 266, 265, 264, 263, 262, 261, 260, 259, 258, 257, 256, 255, 254, 253]
  }, {
    "id": 18,
    "name": "Linked Accounts - 4 services",
    "label": "4 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:45.319Z",
    "data_updated_at": "2017-02-06T02:03:45.387Z",
    "datapoints": [294, 293, 292, 291, 290, 289, 288, 287, 286, 285, 284, 283, 282, 281, 280, 279, 278, 277, 276, 275, 274]
  }, {
    "id": 19,
    "name": "Linked Accounts - 5+ services",
    "label": "5+ services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:45.388Z",
    "data_updated_at": "2017-02-06T02:03:45.457Z",
    "datapoints": [315, 314, 313, 312, 311, 310, 309, 308, 307, 306, 305, 304, 303, 302, 301, 300, 299, 298, 297, 296, 295]
  }, {
    "id": 20,
    "name": "New accounts",
    "label": "New accounts",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:45.459Z",
    "data_updated_at": "2017-02-06T02:03:45.530Z",
    "datapoints": [336, 335, 334, 333, 332, 331, 330, 329, 328, 327, 326, 325, 324, 323, 322, 321, 320, 319, 318, 317, 316]
  }, {
    "id": 21,
    "name": "Sign in per account",
    "label": "Sign in per account",
    "units": "n",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:45.532Z",
    "data_updated_at": "2017-02-06T02:03:45.607Z",
    "datapoints": [356, 355, 354, 353, 352, 351, 350, 349, 348, 347, 346, 345, 344, 343, 342, 341, 340, 339, 338, 337]
  }, {
    "id": 22,
    "name": "Visits to member services",
    "label": "Visits to member services",
    "units": "n",
    "notes": "The average number of member services a user visits during sign-in",
    "updated_at": "2017-02-06T02:03:45.609Z",
    "data_updated_at": "2017-02-06T02:03:45.702Z",
    "datapoints": [377, 376, 375, 374, 373, 372, 371, 370, 369, 368, 367, 366, 365, 364, 363, 362, 361, 360, 359, 358, 357]
  }, {
    "id": 23,
    "name": "Total accounts",
    "label": "Total accounts",
    "units": "i",
    "notes": "The total number of myGov accounts held be all users",
    "updated_at": "2017-02-06T02:03:45.704Z",
    "data_updated_at": "2017-02-06T02:03:45.849Z",
    "datapoints": [420, 419, 418, 417, 416, 415, 414, 413, 412, 411, 410, 409, 408, 407, 406, 405, 404, 403, 402, 401, 400, 399, 398, 397, 396, 395, 394, 393, 392, 391, 390, 389, 388, 387, 386, 385, 384, 383, 382, 381, 380, 379, 378]
  }, {
    "id": 24,
    "name": "Links by member service - Medicare",
    "label": "Medicare",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:45.851Z",
    "data_updated_at": "2017-02-06T02:03:45.944Z",
    "datapoints": [441, 440, 439, 438, 437, 436, 435, 434, 433, 432, 431, 430, 429, 428, 427, 426, 425, 424, 423, 422, 421]
  }, {
    "id": 25,
    "name": "Links by member service - Centrelink",
    "label": "Centrelink",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:45.946Z",
    "data_updated_at": "2017-02-06T02:03:46.011Z",
    "datapoints": [462, 461, 460, 459, 458, 457, 456, 455, 454, 453, 452, 451, 450, 449, 448, 447, 446, 445, 444, 443, 442]
  }, {
    "id": 26,
    "name": "Links by member service - CSA",
    "label": "CSA",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:46.013Z",
    "data_updated_at": "2017-02-06T02:03:46.077Z",
    "datapoints": [483, 482, 481, 480, 479, 478, 477, 476, 475, 474, 473, 472, 471, 470, 469, 468, 467, 466, 465, 464, 463]
  }, {
    "id": 27,
    "name": "Links by member service - MyHealth",
    "label": "MyHealth",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:46.078Z",
    "data_updated_at": "2017-02-06T02:03:46.143Z",
    "datapoints": [504, 503, 502, 501, 500, 499, 498, 497, 496, 495, 494, 493, 492, 491, 490, 489, 488, 487, 486, 485, 484]
  }, {
    "id": 28,
    "name": "Links by member service - ATO",
    "label": "ATO",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:46.145Z",
    "data_updated_at": "2017-02-06T02:03:46.210Z",
    "datapoints": [525, 524, 523, 522, 521, 520, 519, 518, 517, 516, 515, 514, 513, 512, 511, 510, 509, 508, 507, 506, 505]
  }, {
    "id": 29,
    "name": "Links by member service - Other",
    "label": "Other",
    "units": "%",
    "notes": "Includes DVA, NDIS, JobSearch & MyAgedCare",
    "updated_at": "2017-02-06T02:03:46.211Z",
    "data_updated_at": "2017-02-06T02:03:46.274Z",
    "datapoints": [546, 545, 544, 543, 542, 541, 540, 539, 538, 537, 536, 535, 534, 533, 532, 531, 530, 529, 528, 527, 526]
  }, {
    "id": 31,
    "name": "Device Types - Desktop",
    "label": "Desktop",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:46.334Z",
    "data_updated_at": "2017-02-06T02:03:46.394Z",
    "datapoints": [585, 584, 583, 582, 581, 580, 579, 578, 577, 576, 575, 574, 573, 572, 571, 570, 569, 568, 567, 566, 565]
  }, {
    "id": 32,
    "name": "Device Types - Mobile",
    "label": "Mobile",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:46.396Z",
    "data_updated_at": "2017-02-06T02:03:46.472Z",
    "datapoints": [605, 604, 603, 602, 601, 600, 599, 598, 597, 596, 595, 594, 593, 592, 591, 590, 589, 588, 587, 586]
  }, {
    "id": 33,
    "name": "Device Types - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:46.473Z",
    "data_updated_at": "2017-02-06T02:03:46.539Z",
    "datapoints": [625, 624, 623, 622, 621, 620, 619, 618, 617, 616, 615, 614, 613, 612, 611, 610, 609, 608, 607, 606]
  }, {
    "id": 34,
    "name": "Navigations by service - Medicare",
    "label": "Medicare",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:46.540Z",
    "data_updated_at": "2017-02-06T02:03:46.611Z",
    "datapoints": [646, 645, 644, 643, 642, 641, 640, 639, 638, 637, 636, 635, 634, 633, 632, 631, 630, 629, 628, 627, 626]
  }, {
    "id": 35,
    "name": "Navigations by service - Centrelink",
    "label": "Centrelink",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:46.613Z",
    "data_updated_at": "2017-02-06T02:03:46.681Z",
    "datapoints": [667, 666, 665, 664, 663, 662, 661, 660, 659, 658, 657, 656, 655, 654, 653, 652, 651, 650, 649, 648, 647]
  }, {
    "id": 36,
    "name": "Navigations by service - Child Support",
    "label": "Child Support",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:46.683Z",
    "data_updated_at": "2017-02-06T02:03:46.748Z",
    "datapoints": [688, 687, 686, 685, 684, 683, 682, 681, 680, 679, 678, 677, 676, 675, 674, 673, 672, 671, 670, 669, 668]
  }, {
    "id": 37,
    "name": "Navigations by service - ATO",
    "label": "ATO",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:46.750Z",
    "data_updated_at": "2017-02-06T02:03:46.847Z",
    "datapoints": [709, 708, 707, 706, 705, 704, 703, 702, 701, 700, 699, 698, 697, 696, 695, 694, 693, 692, 691, 690, 689]
  }, {
    "id": 38,
    "name": "Navigations by service - Other",
    "label": "Other",
    "units": "%",
    "notes": "Includes Disability Care, DVA, DSS, PCHER, MyHealth",
    "updated_at": "2017-02-06T02:03:46.849Z",
    "data_updated_at": "2017-02-06T02:03:46.941Z",
    "datapoints": [730, 729, 728, 727, 726, 725, 724, 723, 722, 721, 720, 719, 718, 717, 716, 715, 714, 713, 712, 711, 710]
  }, {
    "id": 41,
    "name": "User satisfaction",
    "label": "User satisfaction",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:47.609Z",
    "data_updated_at": "2017-02-06T02:03:47.640Z",
    "datapoints": [819, 818, 817, 816, 815, 814, 813, 812]
  }, {
    "id": 42,
    "name": "Cost per transaction",
    "label": "Cost per transaction",
    "units": "$",
    "notes": "",
    "updated_at": "2017-02-06T02:03:47.642Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 43,
    "name": "Completion rate",
    "label": "Completion rate",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:47.644Z",
    "data_updated_at": "2017-02-06T02:03:47.678Z",
    "datapoints": [827, 826, 825, 824, 823, 822, 821, 820]
  }, {
    "id": 44,
    "name": "Digital take-up",
    "label": "Digital take-up",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:47.680Z",
    "data_updated_at": "2017-02-06T02:03:47.708Z",
    "datapoints": [835, 834, 833, 832, 831, 830, 829, 828]
  }, {
    "id": 45,
    "name": "Device Usage - Mobile",
    "label": "Mobile",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:47.709Z",
    "data_updated_at": "2017-02-06T02:03:47.739Z",
    "datapoints": [843, 842, 841, 840, 839, 838, 837, 836]
  }, {
    "id": 46,
    "name": "Device Usage - Tablet",
    "label": "Tablet",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:47.741Z",
    "data_updated_at": "2017-02-06T02:03:47.766Z",
    "datapoints": [851, 850, 849, 848, 847, 846, 845, 844]
  }, {
    "id": 47,
    "name": "Device Usage - Desktop",
    "label": "Desktop",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:47.768Z",
    "data_updated_at": "2017-02-06T02:03:47.794Z",
    "datapoints": [859, 858, 857, 856, 855, 854, 853, 852]
  }, {
    "id": 48,
    "name": "Browser Usage - Chrome",
    "label": "Chrome",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:47.795Z",
    "data_updated_at": "2017-02-06T02:03:47.823Z",
    "datapoints": [867, 866, 865, 864, 863, 862, 861, 860]
  }, {
    "id": 49,
    "name": "Browser Usage - Safari",
    "label": "Safari",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:47.825Z",
    "data_updated_at": "2017-02-06T02:03:47.852Z",
    "datapoints": [875, 874, 873, 872, 871, 870, 869, 868]
  }, {
    "id": 50,
    "name": "Browser Usage - Firefox",
    "label": "Firefox",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:47.854Z",
    "data_updated_at": "2017-02-06T02:03:47.879Z",
    "datapoints": [883, 882, 881, 880, 879, 878, 877, 876]
  }, {
    "id": 51,
    "name": "Browser Usage - Internet Explorer",
    "label": "Internet Explorer",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:47.880Z",
    "data_updated_at": "2017-02-06T02:03:47.906Z",
    "datapoints": [891, 890, 889, 888, 887, 886, 885, 884]
  }, {
    "id": 52,
    "name": "Browser Usage - Other",
    "label": "Other",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-02-06T02:03:47.908Z",
    "data_updated_at": "2017-02-06T02:03:47.931Z",
    "datapoints": [899, 898, 897, 896, 895, 894, 893, 892]
  }, {
    "id": 53,
    "name": "User satisfaction",
    "label": "User satisfaction",
    "units": "%",
    "notes": "This data is currently unavailable due to....",
    "updated_at": "2017-02-06T02:03:48.081Z",
    "data_updated_at": "2017-02-06T02:03:48.100Z",
    "datapoints": [903, 902, 901, 900]
  }, {
    "id": 54,
    "name": "Cost per transaction",
    "label": "Cost per transaction",
    "units": "$",
    "notes": "This data is currently unavailable due to....",
    "updated_at": "2017-02-06T02:03:48.103Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 55,
    "name": "Completion rate",
    "label": "Completion rate",
    "units": "%",
    "notes": "The percentage of visitors to the business.gov.au 'A business or a hobby?' page who go on to use the tool. This is calculated by dividing the total number of ..... by the total number of .......",
    "updated_at": "2017-02-06T02:03:48.105Z",
    "data_updated_at": "2017-02-06T02:03:48.119Z",
    "datapoints": [907, 906, 905, 904]
  }, {
    "id": 56,
    "name": "Digital take-up",
    "label": "Digital take-up",
    "units": "%",
    "notes": "The percentage of users who successfully generate a result after starting the tool. This is calculated by dividing the total number of successfully completed transactions by the total number of started transactions.",
    "updated_at": "2017-02-06T02:03:48.121Z",
    "data_updated_at": "2017-02-06T02:03:48.134Z",
    "datapoints": [911, 910, 909, 908]
  }, {
    "id": 57,
    "name": "Click Through - ABLIS",
    "label": "ABLIS",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.135Z",
    "data_updated_at": "2017-02-06T02:03:48.157Z",
    "datapoints": [915, 914, 913, 912]
  }, {
    "id": 58,
    "name": "Click Through - ATO",
    "label": "ATO",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.159Z",
    "data_updated_at": "2017-02-06T02:03:48.193Z",
    "datapoints": [919, 918, 917, 916]
  }, {
    "id": 59,
    "name": "Click Through - business.gov.au",
    "label": "business.gov.au",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.196Z",
    "data_updated_at": "2017-02-06T02:03:48.217Z",
    "datapoints": [923, 922, 921, 920]
  }, {
    "id": 60,
    "name": "Click Through - IP Australia",
    "label": "IP Australia",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.220Z",
    "data_updated_at": "2017-02-06T02:03:48.236Z",
    "datapoints": [927, 926, 925, 924]
  }, {
    "id": 61,
    "name": "Click Through - Other",
    "label": "Other",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.238Z",
    "data_updated_at": "2017-02-06T02:03:48.256Z",
    "datapoints": [931, 930, 929, 928]
  }, {
    "id": 62,
    "name": "Click Through - External sites",
    "label": "External sites",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.258Z",
    "data_updated_at": "2017-02-06T02:03:48.283Z",
    "datapoints": [935, 934, 933, 932]
  }, {
    "id": 63,
    "name": "Click Through - Direct",
    "label": "Direct",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.285Z",
    "data_updated_at": "2017-02-06T02:03:48.298Z",
    "datapoints": [939, 938, 937, 936]
  }, {
    "id": 64,
    "name": "Help sought - No help required",
    "label": "No help required",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.299Z",
    "data_updated_at": "2017-02-06T02:03:48.312Z",
    "datapoints": [943, 942, 941, 940]
  }, {
    "id": 65,
    "name": "Help sought - Help required",
    "label": "Help required",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.314Z",
    "data_updated_at": "2017-02-06T02:03:48.328Z",
    "datapoints": [947, 946, 945, 944]
  }, {
    "id": 66,
    "name": "Device usage - Desktop",
    "label": "Desktop",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.331Z",
    "data_updated_at": "2017-02-06T02:03:48.345Z",
    "datapoints": [951, 950, 949, 948]
  }, {
    "id": 67,
    "name": "Device usage - Mobile",
    "label": "Mobile",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.346Z",
    "data_updated_at": "2017-02-06T02:03:48.359Z",
    "datapoints": [955, 954, 953, 952]
  }, {
    "id": 68,
    "name": "Device usage - Tablet",
    "label": "Tablet",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.361Z",
    "data_updated_at": "2017-02-06T02:03:48.374Z",
    "datapoints": [959, 958, 957, 956]
  }, {
    "id": 69,
    "name": "Device usage - Chrome",
    "label": "Chrome",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.375Z",
    "data_updated_at": "2017-02-06T02:03:48.388Z",
    "datapoints": [963, 962, 961, 960]
  }, {
    "id": 70,
    "name": "Broswer usage - Safari",
    "label": "Safari",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.390Z",
    "data_updated_at": "2017-02-06T02:03:48.405Z",
    "datapoints": [967, 966, 965, 964]
  }, {
    "id": 71,
    "name": "Broswer usage - IE",
    "label": "IE",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.406Z",
    "data_updated_at": "2017-02-06T02:03:48.419Z",
    "datapoints": [971, 970, 969, 968]
  }, {
    "id": 72,
    "name": "Broswer usage - Firefox",
    "label": "Firefox",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.421Z",
    "data_updated_at": "2017-02-06T02:03:48.435Z",
    "datapoints": [975, 974, 973, 972]
  }, {
    "id": 73,
    "name": "Broswer usage - Other",
    "label": "Other",
    "units": "%",
    "notes": "",
    "updated_at": "2017-02-06T02:03:48.437Z",
    "data_updated_at": "2017-02-06T02:03:48.451Z",
    "datapoints": [979, 978, 977, 976]
  }],
  "slices": [{
    "widget_id": 18,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-03-01T00:00:00Z",
    "period_end": "2016-03-31T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "99.0"}]
  }, {
    "widget_id": 18,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-04-01T00:00:00Z",
    "period_end": "2016-04-30T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "95.0"}]
  }, {
    "widget_id": 18,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-05-01T00:00:00Z",
    "period_end": "2016-05-31T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "90.0"}]
  }, {
    "widget_id": 18,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "97.0"}]
  }, {
    "widget_id": 18,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "96.0"}]
  }, {
    "widget_id": 18,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "97.0"}]
  }, {
    "widget_id": 18,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "94.0"}]
  }, {
    "widget_id": 18,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-10-01T00:00:00Z",
    "period_end": "2016-10-31T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "97.0"}]
  }, {
    "widget_id": 20,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-03-01T00:00:00Z",
    "period_end": "2016-03-31T00:00:00Z",
    "groups": [{"dataset_id": 44, "value": "1.9"}]
  }, {
    "widget_id": 20,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-04-01T00:00:00Z",
    "period_end": "2016-04-30T00:00:00Z",
    "groups": [{"dataset_id": 44, "value": "15.0"}]
  }, {
    "widget_id": 20,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-05-01T00:00:00Z",
    "period_end": "2016-05-31T00:00:00Z",
    "groups": [{"dataset_id": 44, "value": "14.0"}]
  }, {
    "widget_id": 20,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 44, "value": "23.0"}]
  }, {
    "widget_id": 20,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 44, "value": "21.93"}]
  }, {
    "widget_id": 20,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 44, "value": "25.0"}]
  }, {
    "widget_id": 20,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 44, "value": "22.0"}]
  }, {
    "widget_id": 20,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-10-01T00:00:00Z",
    "period_end": "2016-10-31T00:00:00Z",
    "groups": [{"dataset_id": 44, "value": "30.0"}]
  }, {
    "widget_id": 21,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-03-01T00:00:00Z",
    "period_end": "2016-03-31T00:00:00Z",
    "groups": [{"dataset_id": 43, "value": "94.0"}]
  }, {
    "widget_id": 21,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-04-01T00:00:00Z",
    "period_end": "2016-04-30T00:00:00Z",
    "groups": [{"dataset_id": 43, "value": "92.0"}]
  }, {
    "widget_id": 21,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-05-01T00:00:00Z",
    "period_end": "2016-05-31T00:00:00Z",
    "groups": [{"dataset_id": 43, "value": "97.0"}]
  }, {
    "widget_id": 21,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 43, "value": "98.0"}]
  }, {
    "widget_id": 21,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 43, "value": "99.0"}]
  }, {
    "widget_id": 21,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 43, "value": "99.0"}]
  }, {
    "widget_id": 21,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 43, "value": "100.0"}]
  }, {
    "widget_id": 21,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-10-01T00:00:00Z",
    "period_end": "2016-10-31T00:00:00Z",
    "groups": [{"dataset_id": 43, "value": "100.0"}]
  }, {
    "widget_id": 22,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-03-01T00:00:00Z",
    "period_end": "2016-03-31T00:00:00Z",
    "groups": [{"dataset_id": 45, "value": "43.0"}, {"dataset_id": 46, "value": "6.0"}, {
      "dataset_id": 47,
      "value": "51.0"
    }]
  }, {
    "widget_id": 22,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-04-01T00:00:00Z",
    "period_end": "2016-04-30T00:00:00Z",
    "groups": [{"dataset_id": 45, "value": "48.0"}, {"dataset_id": 46, "value": "6.0"}, {
      "dataset_id": 47,
      "value": "46.0"
    }]
  }, {
    "widget_id": 22,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-05-01T00:00:00Z",
    "period_end": "2016-05-31T00:00:00Z",
    "groups": [{"dataset_id": 45, "value": "47.0"}, {"dataset_id": 46, "value": "6.0"}, {
      "dataset_id": 47,
      "value": "47.0"
    }]
  }, {
    "widget_id": 22,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 45, "value": "49.0"}, {"dataset_id": 46, "value": "2.0"}, {
      "dataset_id": 47,
      "value": "49.0"
    }]
  }, {
    "widget_id": 22,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 45, "value": "50.0"}, {"dataset_id": 46, "value": "3.0"}, {
      "dataset_id": 47,
      "value": "47.0"
    }]
  }, {
    "widget_id": 22,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 45, "value": "51.0"}, {"dataset_id": 46, "value": "5.0"}, {
      "dataset_id": 47,
      "value": "44.0"
    }]
  }, {
    "widget_id": 22,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 45, "value": "54.0"}, {"dataset_id": 46, "value": "5.0"}, {
      "dataset_id": 47,
      "value": "41.0"
    }]
  }, {
    "widget_id": 22,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-10-01T00:00:00Z",
    "period_end": "2016-10-31T00:00:00Z",
    "groups": [{"dataset_id": 45, "value": "55.0"}, {"dataset_id": 46, "value": "5.0"}, {
      "dataset_id": 47,
      "value": "40.0"
    }]
  }, {
    "widget_id": 23,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-03-01T00:00:00Z",
    "period_end": "2016-03-31T00:00:00Z",
    "groups": [{"dataset_id": 48, "value": "16.0"}, {"dataset_id": 49, "value": "34.0"}, {
      "dataset_id": 50,
      "value": "23.0"
    }, {"dataset_id": 51, "value": "16.0"}, {"dataset_id": 52, "value": "11.0"}]
  }, {
    "widget_id": 23,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-04-01T00:00:00Z",
    "period_end": "2016-04-30T00:00:00Z",
    "groups": [{"dataset_id": 48, "value": "15.0"}, {"dataset_id": 49, "value": "41.0"}, {
      "dataset_id": 50,
      "value": "28.0"
    }, {"dataset_id": 51, "value": "6.0"}, {"dataset_id": 52, "value": "10.0"}]
  }, {
    "widget_id": 23,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-05-01T00:00:00Z",
    "period_end": "2016-05-31T00:00:00Z",
    "groups": [{"dataset_id": 48, "value": "17.0"}, {"dataset_id": 49, "value": "38.0"}, {
      "dataset_id": 50,
      "value": "28.0"
    }, {"dataset_id": 51, "value": "6.0"}, {"dataset_id": 52, "value": "11.0"}]
  }, {
    "widget_id": 23,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 48, "value": "16.0"}, {"dataset_id": 49, "value": "37.0"}, {
      "dataset_id": 50,
      "value": "30.0"
    }, {"dataset_id": 51, "value": "6.0"}, {"dataset_id": 52, "value": "11.0"}]
  }, {
    "widget_id": 23,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 48, "value": "17.0"}, {"dataset_id": 49, "value": "37.0"}, {
      "dataset_id": 50,
      "value": "29.0"
    }, {"dataset_id": 51, "value": "6.0"}, {"dataset_id": 52, "value": "11.0"}]
  }, {
    "widget_id": 23,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 48, "value": "18.0"}, {"dataset_id": 49, "value": "47.0"}, {
      "dataset_id": 50,
      "value": "26.0"
    }, {"dataset_id": 51, "value": "5.0"}, {"dataset_id": 52, "value": "4.0"}]
  }, {
    "widget_id": 23,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 48, "value": "20.0"}, {"dataset_id": 49, "value": "50.0"}, {
      "dataset_id": 50,
      "value": "22.0"
    }, {"dataset_id": 51, "value": "5.0"}, {"dataset_id": 52, "value": "3.0"}]
  }, {
    "widget_id": 23,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-10-01T00:00:00Z",
    "period_end": "2016-10-31T00:00:00Z",
    "groups": [{"dataset_id": 48, "value": "17.0"}, {"dataset_id": 49, "value": "52.0"}, {
      "dataset_id": 50,
      "value": "22.0"
    }, {"dataset_id": 51, "value": "5.0"}, {"dataset_id": 52, "value": "4.0"}]
  }, {
    "widget_id": 26,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-03-01T00:00:00Z",
    "period_end": "2016-03-31T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "99.0"}, {"dataset_id": 43, "value": "94.0"}, {
      "dataset_id": 44,
      "value": "1.9"
    }]
  }, {
    "widget_id": 26,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-04-01T00:00:00Z",
    "period_end": "2016-04-30T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "95.0"}, {"dataset_id": 43, "value": "92.0"}, {
      "dataset_id": 44,
      "value": "15.0"
    }]
  }, {
    "widget_id": 26,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-05-01T00:00:00Z",
    "period_end": "2016-05-31T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "90.0"}, {"dataset_id": 43, "value": "97.0"}, {
      "dataset_id": 44,
      "value": "14.0"
    }]
  }, {
    "widget_id": 26,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "97.0"}, {"dataset_id": 43, "value": "98.0"}, {
      "dataset_id": 44,
      "value": "23.0"
    }]
  }, {
    "widget_id": 26,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "96.0"}, {"dataset_id": 43, "value": "99.0"}, {
      "dataset_id": 44,
      "value": "21.93"
    }]
  }, {
    "widget_id": 26,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "97.0"}, {"dataset_id": 43, "value": "99.0"}, {
      "dataset_id": 44,
      "value": "25.0"
    }]
  }, {
    "widget_id": 26,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "94.0"}, {"dataset_id": 43, "value": "100.0"}, {
      "dataset_id": 44,
      "value": "22.0"
    }]
  }, {
    "widget_id": 26,
    "dashboard_id": 2,
    "period": "month",
    "period_start": "2016-10-01T00:00:00Z",
    "period_end": "2016-10-31T00:00:00Z",
    "groups": [{"dataset_id": 41, "value": "97.0"}, {"dataset_id": 43, "value": "100.0"}, {
      "dataset_id": 44,
      "value": "30.0"
    }]
  }, {
    "widget_id": 27,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 53, "value": 0}, {"dataset_id": 55, "value": "58.0"}, {"dataset_id": 56, "value": "42.0"}]
  }, {
    "widget_id": 27,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 53, "value": "76.8"}, {"dataset_id": 55, "value": "56.1"}, {
      "dataset_id": 56,
      "value": "76.2"
    }]
  }, {
    "widget_id": 27,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 53, "value": "75.6"}, {"dataset_id": 55, "value": "58.2"}, {
      "dataset_id": 56,
      "value": "50.3"
    }]
  }, {
    "widget_id": 27,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 53, "value": "74.5"}, {"dataset_id": 55, "value": "57.9"}, {
      "dataset_id": 56,
      "value": "58.1"
    }]
  }, {
    "widget_id": 28,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 53, "value": 0}]
  }, {
    "widget_id": 28,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 53, "value": "76.8"}]
  }, {
    "widget_id": 28,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 53, "value": "75.6"}]
  }, {
    "widget_id": 28,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 53, "value": "74.5"}]
  }, {
    "widget_id": 30,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 56, "value": "42.0"}]
  }, {
    "widget_id": 30,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 56, "value": "76.2"}]
  }, {
    "widget_id": 30,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 56, "value": "50.3"}]
  }, {
    "widget_id": 30,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 56, "value": "58.1"}]
  }, {
    "widget_id": 31,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 55, "value": "58.0"}]
  }, {
    "widget_id": 31,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 55, "value": "56.1"}]
  }, {
    "widget_id": 31,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 55, "value": "58.2"}]
  }, {
    "widget_id": 31,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 55, "value": "57.9"}]
  }, {
    "widget_id": 32,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 57, "value": "8.0"}, {"dataset_id": 58, "value": "46.0"}, {
      "dataset_id": 59,
      "value": "28.0"
    }, {"dataset_id": 60, "value": "6.0"}, {"dataset_id": 61, "value": "11.0"}]
  }, {
    "widget_id": 32,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 57, "value": "7.0"}, {"dataset_id": 58, "value": "47.0"}, {
      "dataset_id": 59,
      "value": "28.0"
    }, {"dataset_id": 60, "value": "3.0"}, {"dataset_id": 61, "value": "18.0"}]
  }, {
    "widget_id": 32,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 57, "value": "10.0"}, {"dataset_id": 58, "value": "41.0"}, {
      "dataset_id": 59,
      "value": "32.0"
    }, {"dataset_id": 60, "value": "4.0"}, {"dataset_id": 61, "value": "13.0"}]
  }, {
    "widget_id": 32,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 57, "value": "12.0"}, {"dataset_id": 58, "value": "41.0"}, {
      "dataset_id": 59,
      "value": "27.0"
    }, {"dataset_id": 60, "value": "5.0"}, {"dataset_id": 61, "value": "16.0"}]
  }, {
    "widget_id": 33,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 62, "value": "66.0"}, {"dataset_id": 63, "value": "34.0"}]
  }, {
    "widget_id": 33,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 62, "value": "86.0"}, {"dataset_id": 63, "value": "14.0"}]
  }, {
    "widget_id": 33,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 62, "value": "70.2"}, {"dataset_id": 63, "value": "29.8"}]
  }, {
    "widget_id": 33,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 62, "value": "78.2"}, {"dataset_id": 63, "value": "21.8"}]
  }, {
    "widget_id": 34,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 64, "value": "98.0"}, {"dataset_id": 65, "value": "2.0"}]
  }, {
    "widget_id": 34,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 64, "value": "99.6"}, {"dataset_id": 65, "value": "0.4"}]
  }, {
    "widget_id": 34,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 64, "value": "99.4"}, {"dataset_id": 65, "value": "0.6"}]
  }, {
    "widget_id": 34,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 64, "value": "98.4"}, {"dataset_id": 65, "value": "1.6"}]
  }, {
    "widget_id": 35,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 66, "value": "66.0"}, {"dataset_id": 67, "value": "27.0"}, {
      "dataset_id": 68,
      "value": "7.0"
    }]
  }, {
    "widget_id": 35,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 66, "value": "65.0"}, {"dataset_id": 67, "value": "27.0"}, {
      "dataset_id": 68,
      "value": "8.0"
    }]
  }, {
    "widget_id": 35,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 66, "value": "62.0"}, {"dataset_id": 67, "value": "30.0"}, {
      "dataset_id": 68,
      "value": "8.0"
    }]
  }, {
    "widget_id": 35,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 66, "value": "66.0"}, {"dataset_id": 67, "value": "27.0"}, {
      "dataset_id": 68,
      "value": "7.0"
    }]
  }, {
    "widget_id": 36,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-06-01T00:00:00Z",
    "period_end": "2016-06-30T00:00:00Z",
    "groups": [{"dataset_id": 69, "value": "43.0"}, {"dataset_id": 70, "value": "24.0"}, {
      "dataset_id": 71,
      "value": "15.0"
    }, {"dataset_id": 72, "value": "13.0"}, {"dataset_id": 73, "value": "6.0"}]
  }, {
    "widget_id": 36,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-07-01T00:00:00Z",
    "period_end": "2016-07-31T00:00:00Z",
    "groups": [{"dataset_id": 69, "value": "44.5"}, {"dataset_id": 70, "value": "26.4"}, {
      "dataset_id": 71,
      "value": "12.9"
    }, {"dataset_id": 72, "value": "10.9"}, {"dataset_id": 73, "value": "5.3"}]
  }, {
    "widget_id": 36,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-08-01T00:00:00Z",
    "period_end": "2016-08-31T00:00:00Z",
    "groups": [{"dataset_id": 69, "value": "45.0"}, {"dataset_id": 70, "value": "25.0"}, {
      "dataset_id": 71,
      "value": "12.0"
    }, {"dataset_id": 72, "value": "10.0"}, {"dataset_id": 73, "value": "8.0"}]
  }, {
    "widget_id": 36,
    "dashboard_id": 3,
    "period": "month",
    "period_start": "2016-09-01T00:00:00Z",
    "period_end": "2016-09-30T00:00:00Z",
    "groups": [{"dataset_id": 69, "value": "45.0"}, {"dataset_id": 70, "value": "26.0"}, {
      "dataset_id": 71,
      "value": "13.0"
    }, {"dataset_id": 72, "value": "11.0"}, {"dataset_id": 73, "value": "5.0"}]
  }]
};
