// Sun Jan 08 2017 21:34:12 GMT+1100 (AEDT)
export default {
  "currentUser": {"id": 1, "email": "dummy@gmail.com", "token": "HDSFGHJSFD"},
  "dashboards": [{
    "id": 1,
    "name": "myGov",
    "description": "Description",
    "notes": [{
      "title": "Where is this information from?",
      "body": "myGov & Australian Department of Human Services."
    }, {
      "title": "What is myGov?",
      "body": "myGov is a secure, fast and simple way to access Australian Government services online with one username and password."
    }, {
      "title": "What is an \"Active Account\"?",
      "body": "An account on myGov with at least 1 linked member service."
    }, {
      "title": "What is a \"Sign-in\"?",
      "body": "A log in to the myGov service. In a given month, multiple sign-ins by a single account will be counted multiple times."
    }, {
      "title": "What is a member service?",
      "body": "This is an Australian Government service available to users through the myGov account."
    }],
    "url": "https://my.gov.au",
    "target_users": "Users",
    "display_hero": false,
    "display_kpis": false,
    "published_at": "2017-01-08T10:28:18.358Z"
  }],
  "widgets": [{
    "id": 1,
    "dashboard_id": 1,
    "row": 0,
    "pos": 0,
    "name": "Kpis",
    "type": "full",
    "size": "extra-large",
    "units": "n",
    "description": null,
    "options": {},
    "is_hero": true,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": [1, 2, 3, 4]
  }, {
    "id": 2,
    "dashboard_id": 1,
    "row": 1,
    "pos": 0,
    "name": "User satisfaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Overall satisfaction score includes all ratings weighted from 100% for very satisfied to 0% for very dissatisfied",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": [1]
  }, {
    "id": 3,
    "dashboard_id": 1,
    "row": 1,
    "pos": 1,
    "name": "Cost per transaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "$",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": [2]
  }, {
    "id": 4,
    "dashboard_id": 1,
    "row": 1,
    "pos": 2,
    "name": "Digital take-up",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": [3]
  }, {
    "id": 5,
    "dashboard_id": 1,
    "row": 1,
    "pos": 3,
    "name": "Completion rate",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Percentage of transactions made using the digital service.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": [4]
  }, {
    "id": 6,
    "dashboard_id": 1,
    "row": 2,
    "pos": 0,
    "name": "New Accounts",
    "type": "bar",
    "size": "large",
    "units": "n",
    "description": "The number of new myGov accounts created each month.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": "2017-01-08T10:28:20.200Z",
    "datasets": [20]
  }, {
    "id": 7,
    "dashboard_id": 1,
    "row": 2,
    "pos": 1,
    "name": "Total Accounts",
    "type": "sparkline",
    "size": "small",
    "units": "n",
    "description": "The total number of myGov accounts.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": "2017-01-08T10:28:20.788Z",
    "datasets": [23]
  }, {
    "id": 8,
    "dashboard_id": 1,
    "row": 3,
    "pos": 0,
    "name": "Fact",
    "type": "fact",
    "size": "small",
    "units": "n",
    "description": "As of April, 43% of accounts are linked to more than one member service.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": []
  }, {
    "id": 9,
    "dashboard_id": 1,
    "row": 6,
    "pos": 1,
    "name": "Fact",
    "type": "fact",
    "size": "small",
    "units": "n",
    "description": "Chrome was the most popular browser used to access myGov with over 104 million hits.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "data_updated_at": null,
    "datasets": []
  }, {
    "id": 10,
    "dashboard_id": 1,
    "row": 3,
    "pos": 1,
    "name": "Member Service Adoption",
    "type": "line",
    "size": "large",
    "units": "%",
    "description": "The number of members services adopted by myGov users.",
    "options": {"displayRoundedData": false},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": "2017-01-08T10:28:19.744Z",
    "datasets": [15, 16, 17, 18, 19]
  }, {
    "id": 11,
    "dashboard_id": 1,
    "row": 4,
    "pos": 0,
    "name": "Sign-ins per myGov Account",
    "type": "line",
    "size": "medium",
    "units": "n",
    "description": "Monthly frequency of account sign-ins.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": "2017-01-08T10:28:20.320Z",
    "datasets": [21]
  }, {
    "id": 12,
    "dashboard_id": 1,
    "row": 4,
    "pos": 1,
    "name": "Visits To Member Services",
    "type": "line",
    "size": "medium",
    "units": "n",
    "description": "The average number of member services visited for each sign-in.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": "2017-01-08T10:28:20.523Z",
    "datasets": [22]
  }, {
    "id": 13,
    "dashboard_id": 1,
    "row": 7,
    "pos": 0,
    "name": "Device Usage",
    "type": "line",
    "size": "medium",
    "units": "%",
    "description": null,
    "options": {"displayRoundedData": false},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": "2017-01-08T10:28:22.653Z",
    "datasets": [31, 32, 33]
  }, {
    "id": 14,
    "dashboard_id": 1,
    "row": 7,
    "pos": 1,
    "name": "Browser types",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "Types of browsers used to access myGov",
    "options": {"displayRoundedData": false},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": "2017-01-08T10:28:18.504Z",
    "datasets": [5, 6, 7, 8, 9]
  }, {
    "id": 15,
    "dashboard_id": 1,
    "row": 5,
    "pos": 0,
    "name": "Linked Member Services",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "The adoption of each member service by myGov users.",
    "options": {"displayRoundedData": false, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": "2017-01-08T10:28:20.936Z",
    "datasets": [24, 25, 26, 27, 28, 29]
  }, {
    "id": 16,
    "dashboard_id": 1,
    "row": 5,
    "pos": 1,
    "name": "Member Services Activity",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "The use of member services by myGov users.",
    "options": {"displayRoundedData": false, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": "2017-01-08T10:28:23.791Z",
    "datasets": [34, 35, 36, 37, 38]
  }, {
    "id": 17,
    "dashboard_id": 1,
    "row": 6,
    "pos": 0,
    "name": "Traffic source",
    "type": "bar",
    "size": "large",
    "units": "%",
    "description": "Source of web traffic to myGov",
    "options": {"displayRoundedData": false, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-12-28T01:01:01.111Z",
    "data_updated_at": "2017-01-08T10:28:19.028Z",
    "datasets": [10, 11, 12, 13, 14]
  }],
  "datasets": [{
    "id": 1,
    "name": "User satisfaction",
    "label": "User satisfaction",
    "units": "n",
    "notes": null,
    "updated_at": "2017-01-08T10:28:18.382Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 2,
    "name": "Cost per transaction",
    "label": "Cost per transaction",
    "units": "$",
    "notes": "",
    "updated_at": "2017-01-08T10:28:18.396Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 3,
    "name": "Digital take-up",
    "label": "Digital take-up",
    "units": "%",
    "notes": null,
    "updated_at": "2017-01-08T10:28:18.400Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 4,
    "name": "Completion rate",
    "label": "Completion rate",
    "units": "%",
    "notes": null,
    "updated_at": "2017-01-08T10:28:18.402Z",
    "data_updated_at": null,
    "datapoints": []
  }, {
    "id": 5,
    "name": "Chrome",
    "label": "Browser Usage - Chrome",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:18.405Z",
    "data_updated_at": "2017-01-08T10:28:18.504Z",
    "datapoints": [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  }, {
    "id": 6,
    "name": "Browser Usage - Safari",
    "label": "Safari",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:18.507Z",
    "data_updated_at": "2017-01-08T10:28:18.568Z",
    "datapoints": [22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]
  }, {
    "id": 7,
    "name": "Browser Usage - Mozilla",
    "label": "Mozilla",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:18.570Z",
    "data_updated_at": "2017-01-08T10:28:18.646Z",
    "datapoints": [33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23]
  }, {
    "id": 8,
    "name": "Browser Usage - IE",
    "label": "IE",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:18.648Z",
    "data_updated_at": "2017-01-08T10:28:18.736Z",
    "datapoints": [44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34]
  }, {
    "id": 9,
    "name": "Browser Usage - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:18.739Z",
    "data_updated_at": "2017-01-08T10:28:18.803Z",
    "datapoints": [55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45]
  }, {
    "id": 10,
    "name": "Web Traffic Source - humanservices.gov.au",
    "label": "humanservices.gov.au",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:18.806Z",
    "data_updated_at": "2017-01-08T10:28:19.028Z",
    "datapoints": [86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56]
  }, {
    "id": 11,
    "name": "Web Traffic Source - Direct",
    "label": "Direct",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:19.035Z",
    "data_updated_at": "2017-01-08T10:28:19.236Z",
    "datapoints": [117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87]
  }, {
    "id": 12,
    "name": "Web Traffic Source - ato.gov.au",
    "label": "ato.gov.au",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:19.241Z",
    "data_updated_at": "2017-01-08T10:28:19.407Z",
    "datapoints": [148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118]
  }, {
    "id": 13,
    "name": "Web Traffic Source - Google",
    "label": "Google",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:19.409Z",
    "data_updated_at": "2017-01-08T10:28:19.536Z",
    "datapoints": [179, 178, 177, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150, 149]
  }, {
    "id": 14,
    "name": "Web Traffic Source - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:19.538Z",
    "data_updated_at": "2017-01-08T10:28:19.664Z",
    "datapoints": [210, 209, 208, 207, 206, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 181, 180]
  }, {
    "id": 15,
    "name": "Linked Accounts - 1 service",
    "label": "1 service",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:19.666Z",
    "data_updated_at": "2017-01-08T10:28:19.744Z",
    "datapoints": [231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 211]
  }, {
    "id": 16,
    "name": "Linked Accounts - 2 services",
    "label": "2 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:19.746Z",
    "data_updated_at": "2017-01-08T10:28:19.826Z",
    "datapoints": [252, 251, 250, 249, 248, 247, 246, 245, 244, 243, 242, 241, 240, 239, 238, 237, 236, 235, 234, 233, 232]
  }, {
    "id": 17,
    "name": "Linked Accounts - 3 services",
    "label": "3 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:19.828Z",
    "data_updated_at": "2017-01-08T10:28:19.919Z",
    "datapoints": [273, 272, 271, 270, 269, 268, 267, 266, 265, 264, 263, 262, 261, 260, 259, 258, 257, 256, 255, 254, 253]
  }, {
    "id": 18,
    "name": "Linked Accounts - 4 services",
    "label": "4 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:19.928Z",
    "data_updated_at": "2017-01-08T10:28:20.038Z",
    "datapoints": [294, 293, 292, 291, 290, 289, 288, 287, 286, 285, 284, 283, 282, 281, 280, 279, 278, 277, 276, 275, 274]
  }, {
    "id": 19,
    "name": "Linked Accounts - 5+ services",
    "label": "5+ services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:20.040Z",
    "data_updated_at": "2017-01-08T10:28:20.120Z",
    "datapoints": [315, 314, 313, 312, 311, 310, 309, 308, 307, 306, 305, 304, 303, 302, 301, 300, 299, 298, 297, 296, 295]
  }, {
    "id": 20,
    "name": "New accounts",
    "label": "New accounts",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:20.122Z",
    "data_updated_at": "2017-01-08T10:28:20.200Z",
    "datapoints": [336, 335, 334, 333, 332, 331, 330, 329, 328, 327, 326, 325, 324, 323, 322, 321, 320, 319, 318, 317, 316]
  }, {
    "id": 21,
    "name": "Sign in per account",
    "label": "Sign in per account",
    "units": "n",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:20.202Z",
    "data_updated_at": "2017-01-08T10:28:20.320Z",
    "datapoints": [356, 355, 354, 353, 352, 351, 350, 349, 348, 347, 346, 345, 344, 343, 342, 341, 340, 339, 338, 337]
  }, {
    "id": 22,
    "name": "Visits to member services",
    "label": "Visits to member services",
    "units": "n",
    "notes": "The average number of member services a user visits during sign-in",
    "updated_at": "2017-01-08T10:28:20.327Z",
    "data_updated_at": "2017-01-08T10:28:20.523Z",
    "datapoints": [377, 376, 375, 374, 373, 372, 371, 370, 369, 368, 367, 366, 365, 364, 363, 362, 361, 360, 359, 358, 357]
  }, {
    "id": 23,
    "name": "Total accounts",
    "label": "Total accounts",
    "units": "i",
    "notes": "The total number of myGov accounts held be all users",
    "updated_at": "2017-01-08T10:28:20.526Z",
    "data_updated_at": "2017-01-08T10:28:20.788Z",
    "datapoints": [420, 419, 418, 417, 416, 415, 414, 413, 412, 411, 410, 409, 408, 407, 406, 405, 404, 403, 402, 401, 400, 399, 398, 397, 396, 395, 394, 393, 392, 391, 390, 389, 388, 387, 386, 385, 384, 383, 382, 381, 380, 379, 378]
  }, {
    "id": 24,
    "name": "Links by member service - Medicare",
    "label": "Medicare",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:20.790Z",
    "data_updated_at": "2017-01-08T10:28:20.936Z",
    "datapoints": [441, 440, 439, 438, 437, 436, 435, 434, 433, 432, 431, 430, 429, 428, 427, 426, 425, 424, 423, 422, 421]
  }, {
    "id": 25,
    "name": "Links by member service - Centrelink",
    "label": "Centrelink",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:20.939Z",
    "data_updated_at": "2017-01-08T10:28:21.070Z",
    "datapoints": [462, 461, 460, 459, 458, 457, 456, 455, 454, 453, 452, 451, 450, 449, 448, 447, 446, 445, 444, 443, 442]
  }, {
    "id": 26,
    "name": "Links by member service - CSA",
    "label": "CSA",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:21.073Z",
    "data_updated_at": "2017-01-08T10:28:21.170Z",
    "datapoints": [483, 482, 481, 480, 479, 478, 477, 476, 475, 474, 473, 472, 471, 470, 469, 468, 467, 466, 465, 464, 463]
  }, {
    "id": 27,
    "name": "Links by member service - MyHealth",
    "label": "MyHealth",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:21.172Z",
    "data_updated_at": "2017-01-08T10:28:21.390Z",
    "datapoints": [504, 503, 502, 501, 500, 499, 498, 497, 496, 495, 494, 493, 492, 491, 490, 489, 488, 487, 486, 485, 484]
  }, {
    "id": 28,
    "name": "Links by member service - ATO",
    "label": "ATO",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:21.400Z",
    "data_updated_at": "2017-01-08T10:28:21.705Z",
    "datapoints": [525, 524, 523, 522, 521, 520, 519, 518, 517, 516, 515, 514, 513, 512, 511, 510, 509, 508, 507, 506, 505]
  }, {
    "id": 29,
    "name": "Links by member service - Other",
    "label": "Other",
    "units": "%",
    "notes": "Includes DVA, NDIS, JobSearch & MyAgedCare",
    "updated_at": "2017-01-08T10:28:21.719Z",
    "data_updated_at": "2017-01-08T10:28:22.028Z",
    "datapoints": [546, 545, 544, 543, 542, 541, 540, 539, 538, 537, 536, 535, 534, 533, 532, 531, 530, 529, 528, 527, 526]
  }, {
    "id": 31,
    "name": "Device Types - Desktop",
    "label": "Desktop",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:22.321Z",
    "data_updated_at": "2017-01-08T10:28:22.653Z",
    "datapoints": [585, 584, 583, 582, 581, 580, 579, 578, 577, 576, 575, 574, 573, 572, 571, 570, 569, 568, 567, 566, 565]
  }, {
    "id": 32,
    "name": "Device Types - Mobile",
    "label": "Mobile",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:22.674Z",
    "data_updated_at": "2017-01-08T10:28:23.245Z",
    "datapoints": [605, 604, 603, 602, 601, 600, 599, 598, 597, 596, 595, 594, 593, 592, 591, 590, 589, 588, 587, 586]
  }, {
    "id": 33,
    "name": "Device Types - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:23.262Z",
    "data_updated_at": "2017-01-08T10:28:23.590Z",
    "datapoints": [625, 624, 623, 622, 621, 620, 619, 618, 617, 616, 615, 614, 613, 612, 611, 610, 609, 608, 607, 606]
  }, {
    "id": 34,
    "name": "Navigations by service - Medicare",
    "label": "Medicare",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:23.595Z",
    "data_updated_at": "2017-01-08T10:28:23.791Z",
    "datapoints": [646, 645, 644, 643, 642, 641, 640, 639, 638, 637, 636, 635, 634, 633, 632, 631, 630, 629, 628, 627, 626]
  }, {
    "id": 35,
    "name": "Navigations by service - Centrelink",
    "label": "Centrelink",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:23.806Z",
    "data_updated_at": "2017-01-08T10:28:24.136Z",
    "datapoints": [667, 666, 665, 664, 663, 662, 661, 660, 659, 658, 657, 656, 655, 654, 653, 652, 651, 650, 649, 648, 647]
  }, {
    "id": 36,
    "name": "Navigations by service - Child Support",
    "label": "Child Support",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:24.141Z",
    "data_updated_at": "2017-01-08T10:28:24.347Z",
    "datapoints": [688, 687, 686, 685, 684, 683, 682, 681, 680, 679, 678, 677, 676, 675, 674, 673, 672, 671, 670, 669, 668]
  }, {
    "id": 37,
    "name": "Navigations by service - ATO",
    "label": "ATO",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2017-01-08T10:28:24.351Z",
    "data_updated_at": "2017-01-08T10:28:24.476Z",
    "datapoints": [709, 708, 707, 706, 705, 704, 703, 702, 701, 700, 699, 698, 697, 696, 695, 694, 693, 692, 691, 690, 689]
  }, {
    "id": 38,
    "name": "Navigations by service - Other",
    "label": "Other",
    "units": "%",
    "notes": "Includes Disability Care, DVA, DSS, PCHER, MyHealth",
    "updated_at": "2017-01-08T10:28:24.478Z",
    "data_updated_at": "2017-01-08T10:28:24.561Z",
    "datapoints": [730, 729, 728, 727, 726, 725, 724, 723, 722, 721, 720, 719, 718, 717, 716, 715, 714, 713, 712, 711, 710]
  }],
  "datapoints": [{
    "id": 11,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.504Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 10, "value": null, "updated_at": "2017-01-08T10:28:18.499Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 9,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.494Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 8, "value": null, "updated_at": "2017-01-08T10:28:18.490Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 7,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.486Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 6, "value": null, "updated_at": "2017-01-08T10:28:18.482Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 5,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.478Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 4, "value": "41.37", "updated_at": "2017-01-08T10:28:18.473Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 3,
    "value": "40.15",
    "updated_at": "2017-01-08T10:28:18.469Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 2, "value": "41.7", "updated_at": "2017-01-08T10:28:18.459Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 1,
    "value": "41.15",
    "updated_at": "2017-01-08T10:28:18.447Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 22, "value": null, "updated_at": "2017-01-08T10:28:18.568Z", "ts": "2016-11-01 00:00:00.000"}, {
    "id": 21,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.564Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 20, "value": null, "updated_at": "2017-01-08T10:28:18.559Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 19,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.555Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 18, "value": null, "updated_at": "2017-01-08T10:28:18.551Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 17,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.543Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 16, "value": null, "updated_at": "2017-01-08T10:28:18.536Z", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 15,
    "value": "24.82",
    "updated_at": "2017-01-08T10:28:18.531Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 14, "value": "26.33", "updated_at": "2017-01-08T10:28:18.524Z", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 13,
    "value": "27.09",
    "updated_at": "2017-01-08T10:28:18.518Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 12, "value": "28.65", "updated_at": "2017-01-08T10:28:18.513Z", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 33,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.646Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 32, "value": null, "updated_at": "2017-01-08T10:28:18.633Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 31,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.623Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 30, "value": null, "updated_at": "2017-01-08T10:28:18.611Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 29,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.604Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 28, "value": null, "updated_at": "2017-01-08T10:28:18.599Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 27,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.594Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 26, "value": "30.74", "updated_at": "2017-01-08T10:28:18.589Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 25,
    "value": "29.39",
    "updated_at": "2017-01-08T10:28:18.584Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 24, "value": "26.2", "updated_at": "2017-01-08T10:28:18.580Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 23,
    "value": "25.09",
    "updated_at": "2017-01-08T10:28:18.575Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 44, "value": null, "updated_at": "2017-01-08T10:28:18.736Z", "ts": "2016-11-01 00:00:00.000"}, {
    "id": 43,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.728Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 42, "value": null, "updated_at": "2017-01-08T10:28:18.717Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 41,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.706Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 40, "value": null, "updated_at": "2017-01-08T10:28:18.697Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 39,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.691Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 38, "value": null, "updated_at": "2017-01-08T10:28:18.684Z", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 37,
    "value": "2.16",
    "updated_at": "2017-01-08T10:28:18.679Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 36, "value": "2.81", "updated_at": "2017-01-08T10:28:18.674Z", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 35,
    "value": "3.74",
    "updated_at": "2017-01-08T10:28:18.670Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 34, "value": "3.68", "updated_at": "2017-01-08T10:28:18.662Z", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 55,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.803Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 54, "value": null, "updated_at": "2017-01-08T10:28:18.798Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 53,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.793Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 52, "value": null, "updated_at": "2017-01-08T10:28:18.788Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 51,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.783Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 50, "value": null, "updated_at": "2017-01-08T10:28:18.773Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 49,
    "value": null,
    "updated_at": "2017-01-08T10:28:18.765Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 48, "value": "0.91", "updated_at": "2017-01-08T10:28:18.760Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 47,
    "value": "1.32",
    "updated_at": "2017-01-08T10:28:18.754Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 46, "value": "1.26", "updated_at": "2017-01-08T10:28:18.750Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 45,
    "value": "1.43",
    "updated_at": "2017-01-08T10:28:18.745Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 86, "value": "18.1", "updated_at": "2017-01-08T10:28:19.028Z", "ts": "2016-11-01 00:00:00.000"}, {
    "id": 85,
    "value": "12.4",
    "updated_at": "2017-01-08T10:28:19.019Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 84, "value": "15.6", "updated_at": "2017-01-08T10:28:19.013Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 83,
    "value": "15.2",
    "updated_at": "2017-01-08T10:28:19.005Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 82, "value": "14.2", "updated_at": "2017-01-08T10:28:18.999Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 81,
    "value": "19.8",
    "updated_at": "2017-01-08T10:28:18.993Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 80, "value": "24.3", "updated_at": "2017-01-08T10:28:18.987Z", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 79,
    "value": "23.5",
    "updated_at": "2017-01-08T10:28:18.981Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 78, "value": "25.1", "updated_at": "2017-01-08T10:28:18.975Z", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 77,
    "value": "25.7",
    "updated_at": "2017-01-08T10:28:18.969Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 76, "value": "29.4", "updated_at": "2017-01-08T10:28:18.961Z", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 75,
    "value": "28.9",
    "updated_at": "2017-01-08T10:28:18.953Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 74, "value": "24.9", "updated_at": "2017-01-08T10:28:18.937Z", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 73,
    "value": "21.3",
    "updated_at": "2017-01-08T10:28:18.924Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 72, "value": "23.5", "updated_at": "2017-01-08T10:28:18.912Z", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 71,
    "value": "22.2",
    "updated_at": "2017-01-08T10:28:18.907Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 70, "value": "21.1", "updated_at": "2017-01-08T10:28:18.901Z", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 69,
    "value": "35.9",
    "updated_at": "2017-01-08T10:28:18.894Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 68, "value": "36.4", "updated_at": "2017-01-08T10:28:18.889Z", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 67,
    "value": "31.7",
    "updated_at": "2017-01-08T10:28:18.883Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 66, "value": "41.3", "updated_at": "2017-01-08T10:28:18.874Z", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 65,
    "value": "38.1",
    "updated_at": "2017-01-08T10:28:18.868Z",
    "ts": "2015-02-01 00:00:00.000"
  }, {"id": 64, "value": "33.3", "updated_at": "2017-01-08T10:28:18.863Z", "ts": "2015-01-01 00:00:00.000"}, {
    "id": 63,
    "value": "33.5",
    "updated_at": "2017-01-08T10:28:18.858Z",
    "ts": "2014-12-01 00:00:00.000"
  }, {"id": 62, "value": "29.3", "updated_at": "2017-01-08T10:28:18.851Z", "ts": "2014-11-01 00:00:00.000"}, {
    "id": 61,
    "value": "19.7",
    "updated_at": "2017-01-08T10:28:18.846Z",
    "ts": "2014-10-01 00:00:00.000"
  }, {"id": 60, "value": "22.2", "updated_at": "2017-01-08T10:28:18.842Z", "ts": "2014-09-01 00:00:00.000"}, {
    "id": 59,
    "value": "19.6",
    "updated_at": "2017-01-08T10:28:18.837Z",
    "ts": "2014-08-01 00:00:00.000"
  }, {"id": 58, "value": "17.7", "updated_at": "2017-01-08T10:28:18.827Z", "ts": "2014-07-01 00:00:00.000"}, {
    "id": 57,
    "value": "37.6",
    "updated_at": "2017-01-08T10:28:18.819Z",
    "ts": "2014-06-01 00:00:00.000"
  }, {"id": 56, "value": "40.6", "updated_at": "2017-01-08T10:28:18.812Z", "ts": "2014-05-01 00:00:00.000"}, {
    "id": 117,
    "value": "23.6",
    "updated_at": "2017-01-08T10:28:19.236Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 116,
    "value": "18.3",
    "updated_at": "2017-01-08T10:28:19.228Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 115,
    "value": "21.2",
    "updated_at": "2017-01-08T10:28:19.222Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 114,
    "value": "20.8",
    "updated_at": "2017-01-08T10:28:19.213Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 113,
    "value": "19.9",
    "updated_at": "2017-01-08T10:28:19.208Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 112,
    "value": "24.6",
    "updated_at": "2017-01-08T10:28:19.203Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 111,
    "value": "23.1",
    "updated_at": "2017-01-08T10:28:19.194Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 110,
    "value": "25.1",
    "updated_at": "2017-01-08T10:28:19.186Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 109,
    "value": "23.1",
    "updated_at": "2017-01-08T10:28:19.179Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 108,
    "value": "21.8",
    "updated_at": "2017-01-08T10:28:19.173Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 107,
    "value": "20.4",
    "updated_at": "2017-01-08T10:28:19.168Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 106,
    "value": "20.7",
    "updated_at": "2017-01-08T10:28:19.158Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 105,
    "value": "19.4",
    "updated_at": "2017-01-08T10:28:19.152Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 104,
    "value": "18.2",
    "updated_at": "2017-01-08T10:28:19.144Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 103,
    "value": "17.0",
    "updated_at": "2017-01-08T10:28:19.135Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 102,
    "value": "15.7",
    "updated_at": "2017-01-08T10:28:19.130Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 101,
    "value": "14.5",
    "updated_at": "2017-01-08T10:28:19.126Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 100, "value": "17.1", "updated_at": "2017-01-08T10:28:19.121Z", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 99,
    "value": "17.7",
    "updated_at": "2017-01-08T10:28:19.116Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 98, "value": "18.0", "updated_at": "2017-01-08T10:28:19.111Z", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 97,
    "value": "16.7",
    "updated_at": "2017-01-08T10:28:19.106Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 96, "value": "17.9", "updated_at": "2017-01-08T10:28:19.097Z", "ts": "2015-02-01 00:00:00.000"}, {
    "id": 95,
    "value": "19.4",
    "updated_at": "2017-01-08T10:28:19.088Z",
    "ts": "2015-01-01 00:00:00.000"
  }, {"id": 94, "value": "21.0", "updated_at": "2017-01-08T10:28:19.083Z", "ts": "2014-12-01 00:00:00.000"}, {
    "id": 93,
    "value": "20.9",
    "updated_at": "2017-01-08T10:28:19.075Z",
    "ts": "2014-11-01 00:00:00.000"
  }, {"id": 92, "value": "22.2", "updated_at": "2017-01-08T10:28:19.069Z", "ts": "2014-10-01 00:00:00.000"}, {
    "id": 91,
    "value": "22.1",
    "updated_at": "2017-01-08T10:28:19.064Z",
    "ts": "2014-09-01 00:00:00.000"
  }, {"id": 90, "value": "22.1", "updated_at": "2017-01-08T10:28:19.059Z", "ts": "2014-08-01 00:00:00.000"}, {
    "id": 89,
    "value": "23.5",
    "updated_at": "2017-01-08T10:28:19.054Z",
    "ts": "2014-07-01 00:00:00.000"
  }, {"id": 88, "value": "21.2", "updated_at": "2017-01-08T10:28:19.048Z", "ts": "2014-06-01 00:00:00.000"}, {
    "id": 87,
    "value": "20.4",
    "updated_at": "2017-01-08T10:28:19.041Z",
    "ts": "2014-05-01 00:00:00.000"
  }, {
    "id": 148,
    "value": "7.69",
    "updated_at": "2017-01-08T10:28:19.407Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 147,
    "value": "23.5",
    "updated_at": "2017-01-08T10:28:19.403Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 146,
    "value": "15.7",
    "updated_at": "2017-01-08T10:28:19.399Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 145,
    "value": "15.6",
    "updated_at": "2017-01-08T10:28:19.396Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 144,
    "value": "19.1",
    "updated_at": "2017-01-08T10:28:19.392Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 143, "value": "6.3", "updated_at": "2017-01-08T10:28:19.388Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 142,
    "value": "4.2",
    "updated_at": "2017-01-08T10:28:19.384Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 141, "value": "3.7", "updated_at": "2017-01-08T10:28:19.381Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 140,
    "value": "3.9",
    "updated_at": "2017-01-08T10:28:19.377Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 139, "value": "4.0", "updated_at": "2017-01-08T10:28:19.373Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 138,
    "value": "3.9",
    "updated_at": "2017-01-08T10:28:19.370Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 137, "value": "4.1", "updated_at": "2017-01-08T10:28:19.366Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 136,
    "value": "6.3",
    "updated_at": "2017-01-08T10:28:19.362Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 135,
    "value": "11.4",
    "updated_at": "2017-01-08T10:28:19.359Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 134, "value": "9.8", "updated_at": "2017-01-08T10:28:19.355Z", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 133,
    "value": "15.1",
    "updated_at": "2017-01-08T10:28:19.352Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 132,
    "value": "22.3",
    "updated_at": "2017-01-08T10:28:19.348Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 131, "value": "4.6", "updated_at": "2017-01-08T10:28:19.344Z", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 130,
    "value": "4.0",
    "updated_at": "2017-01-08T10:28:19.328Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 129, "value": "3.7", "updated_at": "2017-01-08T10:28:19.318Z", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 128,
    "value": "3.1",
    "updated_at": "2017-01-08T10:28:19.314Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 127, "value": "3.9", "updated_at": "2017-01-08T10:28:19.310Z", "ts": "2015-02-01 00:00:00.000"}, {
    "id": 126,
    "value": "3.9",
    "updated_at": "2017-01-08T10:28:19.306Z",
    "ts": "2015-01-01 00:00:00.000"
  }, {"id": 125, "value": "4.2", "updated_at": "2017-01-08T10:28:19.298Z", "ts": "2014-12-01 00:00:00.000"}, {
    "id": 124,
    "value": "7.8",
    "updated_at": "2017-01-08T10:28:19.294Z",
    "ts": "2014-11-01 00:00:00.000"
  }, {
    "id": 123,
    "value": "20.5",
    "updated_at": "2017-01-08T10:28:19.285Z",
    "ts": "2014-10-01 00:00:00.000"
  }, {
    "id": 122,
    "value": "16.5",
    "updated_at": "2017-01-08T10:28:19.282Z",
    "ts": "2014-09-01 00:00:00.000"
  }, {
    "id": 121,
    "value": "20.0",
    "updated_at": "2017-01-08T10:28:19.278Z",
    "ts": "2014-08-01 00:00:00.000"
  }, {
    "id": 120,
    "value": "23.8",
    "updated_at": "2017-01-08T10:28:19.267Z",
    "ts": "2014-07-01 00:00:00.000"
  }, {"id": 119, "value": "7.9", "updated_at": "2017-01-08T10:28:19.258Z", "ts": "2014-06-01 00:00:00.000"}, {
    "id": 118,
    "value": "5.9",
    "updated_at": "2017-01-08T10:28:19.250Z",
    "ts": "2014-05-01 00:00:00.000"
  }, {
    "id": 179,
    "value": "36.6",
    "updated_at": "2017-01-08T10:28:19.536Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 178,
    "value": "33.0",
    "updated_at": "2017-01-08T10:28:19.532Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 177,
    "value": "34.0",
    "updated_at": "2017-01-08T10:28:19.527Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 176,
    "value": "35.0",
    "updated_at": "2017-01-08T10:28:19.523Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 175,
    "value": "35.0",
    "updated_at": "2017-01-08T10:28:19.518Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 174,
    "value": "34.8",
    "updated_at": "2017-01-08T10:28:19.513Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 173,
    "value": "33.6",
    "updated_at": "2017-01-08T10:28:19.509Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 172,
    "value": "34.0",
    "updated_at": "2017-01-08T10:28:19.505Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 171,
    "value": "33.8",
    "updated_at": "2017-01-08T10:28:19.501Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 170,
    "value": "33.9",
    "updated_at": "2017-01-08T10:28:19.497Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 169,
    "value": "32.7",
    "updated_at": "2017-01-08T10:28:19.492Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 168,
    "value": "33.1",
    "updated_at": "2017-01-08T10:28:19.488Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 167,
    "value": "34.7",
    "updated_at": "2017-01-08T10:28:19.484Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 166,
    "value": "33.0",
    "updated_at": "2017-01-08T10:28:19.479Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 165,
    "value": "33.6",
    "updated_at": "2017-01-08T10:28:19.475Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 164,
    "value": "33.7",
    "updated_at": "2017-01-08T10:28:19.471Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 163,
    "value": "31.9",
    "updated_at": "2017-01-08T10:28:19.466Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 162,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:19.462Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 161,
    "value": "29.3",
    "updated_at": "2017-01-08T10:28:19.458Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 160,
    "value": "34.6",
    "updated_at": "2017-01-08T10:28:19.454Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 159,
    "value": "27.4",
    "updated_at": "2017-01-08T10:28:19.451Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 158,
    "value": "26.6",
    "updated_at": "2017-01-08T10:28:19.447Z",
    "ts": "2015-02-01 00:00:00.000"
  }, {
    "id": 157,
    "value": "29.5",
    "updated_at": "2017-01-08T10:28:19.443Z",
    "ts": "2015-01-01 00:00:00.000"
  }, {
    "id": 156,
    "value": "28.1",
    "updated_at": "2017-01-08T10:28:19.439Z",
    "ts": "2014-12-01 00:00:00.000"
  }, {
    "id": 155,
    "value": "28.9",
    "updated_at": "2017-01-08T10:28:19.435Z",
    "ts": "2014-11-01 00:00:00.000"
  }, {
    "id": 154,
    "value": "24.8",
    "updated_at": "2017-01-08T10:28:19.432Z",
    "ts": "2014-10-01 00:00:00.000"
  }, {
    "id": 153,
    "value": "25.1",
    "updated_at": "2017-01-08T10:28:19.428Z",
    "ts": "2014-09-01 00:00:00.000"
  }, {
    "id": 152,
    "value": "24.3",
    "updated_at": "2017-01-08T10:28:19.424Z",
    "ts": "2014-08-01 00:00:00.000"
  }, {
    "id": 151,
    "value": "22.1",
    "updated_at": "2017-01-08T10:28:19.421Z",
    "ts": "2014-07-01 00:00:00.000"
  }, {
    "id": 150,
    "value": "20.5",
    "updated_at": "2017-01-08T10:28:19.417Z",
    "ts": "2014-06-01 00:00:00.000"
  }, {
    "id": 149,
    "value": "20.5",
    "updated_at": "2017-01-08T10:28:19.413Z",
    "ts": "2014-05-01 00:00:00.000"
  }, {
    "id": 210,
    "value": "14.0",
    "updated_at": "2017-01-08T10:28:19.664Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 209,
    "value": "12.4",
    "updated_at": "2017-01-08T10:28:19.660Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 208,
    "value": "13.1",
    "updated_at": "2017-01-08T10:28:19.656Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 207,
    "value": "13.5",
    "updated_at": "2017-01-08T10:28:19.652Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 206,
    "value": "11.9",
    "updated_at": "2017-01-08T10:28:19.648Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 205,
    "value": "14.6",
    "updated_at": "2017-01-08T10:28:19.644Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 204,
    "value": "14.8",
    "updated_at": "2017-01-08T10:28:19.641Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 203,
    "value": "13.9",
    "updated_at": "2017-01-08T10:28:19.637Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 202,
    "value": "14.0",
    "updated_at": "2017-01-08T10:28:19.633Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 201,
    "value": "14.6",
    "updated_at": "2017-01-08T10:28:19.630Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 200,
    "value": "13.7",
    "updated_at": "2017-01-08T10:28:19.626Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 199,
    "value": "13.1",
    "updated_at": "2017-01-08T10:28:19.622Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 198,
    "value": "14.7",
    "updated_at": "2017-01-08T10:28:19.618Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 197,
    "value": "16.1",
    "updated_at": "2017-01-08T10:28:19.615Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 196,
    "value": "16.1",
    "updated_at": "2017-01-08T10:28:19.611Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 195,
    "value": "13.5",
    "updated_at": "2017-01-08T10:28:19.607Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 194,
    "value": "10.2",
    "updated_at": "2017-01-08T10:28:19.603Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 193,
    "value": "13.4",
    "updated_at": "2017-01-08T10:28:19.598Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 192,
    "value": "12.7",
    "updated_at": "2017-01-08T10:28:19.594Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 191,
    "value": "12.0",
    "updated_at": "2017-01-08T10:28:19.590Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 190,
    "value": "11.9",
    "updated_at": "2017-01-08T10:28:19.586Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 189,
    "value": "13.6",
    "updated_at": "2017-01-08T10:28:19.582Z",
    "ts": "2015-02-01 00:00:00.000"
  }, {
    "id": 188,
    "value": "14.0",
    "updated_at": "2017-01-08T10:28:19.578Z",
    "ts": "2015-01-01 00:00:00.000"
  }, {
    "id": 187,
    "value": "13.3",
    "updated_at": "2017-01-08T10:28:19.574Z",
    "ts": "2014-12-01 00:00:00.000"
  }, {
    "id": 186,
    "value": "13.1",
    "updated_at": "2017-01-08T10:28:19.569Z",
    "ts": "2014-11-01 00:00:00.000"
  }, {
    "id": 185,
    "value": "12.9",
    "updated_at": "2017-01-08T10:28:19.564Z",
    "ts": "2014-10-01 00:00:00.000"
  }, {
    "id": 184,
    "value": "14.2",
    "updated_at": "2017-01-08T10:28:19.560Z",
    "ts": "2014-09-01 00:00:00.000"
  }, {
    "id": 183,
    "value": "14.0",
    "updated_at": "2017-01-08T10:28:19.556Z",
    "ts": "2014-08-01 00:00:00.000"
  }, {
    "id": 182,
    "value": "12.9",
    "updated_at": "2017-01-08T10:28:19.552Z",
    "ts": "2014-07-01 00:00:00.000"
  }, {
    "id": 181,
    "value": "12.8",
    "updated_at": "2017-01-08T10:28:19.548Z",
    "ts": "2014-06-01 00:00:00.000"
  }, {
    "id": 180,
    "value": "12.7",
    "updated_at": "2017-01-08T10:28:19.543Z",
    "ts": "2014-05-01 00:00:00.000"
  }, {
    "id": 231,
    "value": "54.1",
    "updated_at": "2017-01-08T10:28:19.744Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 230,
    "value": "54.5",
    "updated_at": "2017-01-08T10:28:19.740Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 229,
    "value": "54.9",
    "updated_at": "2017-01-08T10:28:19.737Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 228,
    "value": "55.33",
    "updated_at": "2017-01-08T10:28:19.733Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 227,
    "value": "55.83",
    "updated_at": "2017-01-08T10:28:19.729Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 226,
    "value": "56.5",
    "updated_at": "2017-01-08T10:28:19.726Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 225,
    "value": "56.98",
    "updated_at": "2017-01-08T10:28:19.722Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 224,
    "value": "57.42",
    "updated_at": "2017-01-08T10:28:19.718Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 223,
    "value": "57.84",
    "updated_at": "2017-01-08T10:28:19.715Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 222,
    "value": "58.24",
    "updated_at": "2017-01-08T10:28:19.711Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 221,
    "value": "58.72",
    "updated_at": "2017-01-08T10:28:19.707Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 220,
    "value": "59.21",
    "updated_at": "2017-01-08T10:28:19.704Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 219,
    "value": "59.56",
    "updated_at": "2017-01-08T10:28:19.700Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 218,
    "value": "59.98",
    "updated_at": "2017-01-08T10:28:19.697Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 217,
    "value": "60.54",
    "updated_at": "2017-01-08T10:28:19.693Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 216,
    "value": "61.15",
    "updated_at": "2017-01-08T10:28:19.690Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 215,
    "value": "62.12",
    "updated_at": "2017-01-08T10:28:19.686Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 214,
    "value": "63.66",
    "updated_at": "2017-01-08T10:28:19.682Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 213,
    "value": "64.29",
    "updated_at": "2017-01-08T10:28:19.678Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 212,
    "value": "64.88",
    "updated_at": "2017-01-08T10:28:19.675Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 211,
    "value": "65.51",
    "updated_at": "2017-01-08T10:28:19.671Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 252,
    "value": "26.02",
    "updated_at": "2017-01-08T10:28:19.826Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 251,
    "value": "25.9",
    "updated_at": "2017-01-08T10:28:19.821Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 250,
    "value": "25.8",
    "updated_at": "2017-01-08T10:28:19.817Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 249,
    "value": "25.77",
    "updated_at": "2017-01-08T10:28:19.813Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 248,
    "value": "25.71",
    "updated_at": "2017-01-08T10:28:19.809Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 247,
    "value": "25.64",
    "updated_at": "2017-01-08T10:28:19.806Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 246,
    "value": "25.52",
    "updated_at": "2017-01-08T10:28:19.802Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 245,
    "value": "25.38",
    "updated_at": "2017-01-08T10:28:19.798Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 244,
    "value": "25.23",
    "updated_at": "2017-01-08T10:28:19.795Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 243,
    "value": "25.09",
    "updated_at": "2017-01-08T10:28:19.791Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 242,
    "value": "24.9",
    "updated_at": "2017-01-08T10:28:19.787Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 241,
    "value": "24.7",
    "updated_at": "2017-01-08T10:28:19.783Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 240,
    "value": "24.55",
    "updated_at": "2017-01-08T10:28:19.780Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 239,
    "value": "24.37",
    "updated_at": "2017-01-08T10:28:19.776Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 238,
    "value": "24.13",
    "updated_at": "2017-01-08T10:28:19.772Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 237,
    "value": "23.85",
    "updated_at": "2017-01-08T10:28:19.768Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 236,
    "value": "23.41",
    "updated_at": "2017-01-08T10:28:19.765Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 235,
    "value": "22.78",
    "updated_at": "2017-01-08T10:28:19.761Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 234,
    "value": "22.46",
    "updated_at": "2017-01-08T10:28:19.757Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 233,
    "value": "22.18",
    "updated_at": "2017-01-08T10:28:19.754Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 232,
    "value": "21.91",
    "updated_at": "2017-01-08T10:28:19.750Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 273,
    "value": "13.27",
    "updated_at": "2017-01-08T10:28:19.919Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 272,
    "value": "13.1",
    "updated_at": "2017-01-08T10:28:19.908Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 271,
    "value": "13.0",
    "updated_at": "2017-01-08T10:28:19.904Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 270,
    "value": "12.8",
    "updated_at": "2017-01-08T10:28:19.900Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 269,
    "value": "12.58",
    "updated_at": "2017-01-08T10:28:19.896Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 268,
    "value": "12.28",
    "updated_at": "2017-01-08T10:28:19.892Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 267,
    "value": "12.11",
    "updated_at": "2017-01-08T10:28:19.888Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 266,
    "value": "11.94",
    "updated_at": "2017-01-08T10:28:19.884Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 265,
    "value": "11.79",
    "updated_at": "2017-01-08T10:28:19.881Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 264,
    "value": "11.64",
    "updated_at": "2017-01-08T10:28:19.877Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 263,
    "value": "11.48",
    "updated_at": "2017-01-08T10:28:19.873Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 262,
    "value": "11.31",
    "updated_at": "2017-01-08T10:28:19.868Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 261,
    "value": "11.19",
    "updated_at": "2017-01-08T10:28:19.864Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 260,
    "value": "11.04",
    "updated_at": "2017-01-08T10:28:19.860Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 259,
    "value": "10.86",
    "updated_at": "2017-01-08T10:28:19.856Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 258,
    "value": "10.64",
    "updated_at": "2017-01-08T10:28:19.852Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 257,
    "value": "10.31",
    "updated_at": "2017-01-08T10:28:19.848Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 256,
    "value": "9.75",
    "updated_at": "2017-01-08T10:28:19.844Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 255,
    "value": "9.55",
    "updated_at": "2017-01-08T10:28:19.840Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 254,
    "value": "9.36",
    "updated_at": "2017-01-08T10:28:19.836Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 253,
    "value": "9.16",
    "updated_at": "2017-01-08T10:28:19.833Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 294,
    "value": "4.94",
    "updated_at": "2017-01-08T10:28:20.038Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 293, "value": "4.8", "updated_at": "2017-01-08T10:28:20.034Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 292,
    "value": "4.7",
    "updated_at": "2017-01-08T10:28:20.030Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 291,
    "value": "4.61",
    "updated_at": "2017-01-08T10:28:20.026Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 290,
    "value": "4.46",
    "updated_at": "2017-01-08T10:28:20.021Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 289,
    "value": "4.25",
    "updated_at": "2017-01-08T10:28:20.017Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 288,
    "value": "4.14",
    "updated_at": "2017-01-08T10:28:20.014Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 287,
    "value": "4.05",
    "updated_at": "2017-01-08T10:28:20.010Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 286,
    "value": "3.97",
    "updated_at": "2017-01-08T10:28:20.006Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 285,
    "value": "3.89",
    "updated_at": "2017-01-08T10:28:19.999Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 284,
    "value": "3.81",
    "updated_at": "2017-01-08T10:28:19.993Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 283,
    "value": "3.74",
    "updated_at": "2017-01-08T10:28:19.989Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 282,
    "value": "3.69",
    "updated_at": "2017-01-08T10:28:19.986Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 281,
    "value": "3.63",
    "updated_at": "2017-01-08T10:28:19.982Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 280,
    "value": "3.55",
    "updated_at": "2017-01-08T10:28:19.976Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 279,
    "value": "3.47",
    "updated_at": "2017-01-08T10:28:19.970Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 278,
    "value": "3.32",
    "updated_at": "2017-01-08T10:28:19.967Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 277,
    "value": "3.09",
    "updated_at": "2017-01-08T10:28:19.963Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 276, "value": "3.0", "updated_at": "2017-01-08T10:28:19.959Z", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 275,
    "value": "2.92",
    "updated_at": "2017-01-08T10:28:19.955Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 274,
    "value": "2.82",
    "updated_at": "2017-01-08T10:28:19.939Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 315,
    "value": "1.67",
    "updated_at": "2017-01-08T10:28:20.120Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 314, "value": "1.6", "updated_at": "2017-01-08T10:28:20.117Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 313,
    "value": "1.6",
    "updated_at": "2017-01-08T10:28:20.113Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 312, "value": "1.5", "updated_at": "2017-01-08T10:28:20.109Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 311,
    "value": "1.43",
    "updated_at": "2017-01-08T10:28:20.105Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 310,
    "value": "1.32",
    "updated_at": "2017-01-08T10:28:20.101Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 309,
    "value": "1.25",
    "updated_at": "2017-01-08T10:28:20.097Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 308,
    "value": "1.22",
    "updated_at": "2017-01-08T10:28:20.093Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 307,
    "value": "1.18",
    "updated_at": "2017-01-08T10:28:20.089Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 306,
    "value": "1.13",
    "updated_at": "2017-01-08T10:28:20.086Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 305,
    "value": "1.09",
    "updated_at": "2017-01-08T10:28:20.082Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 304,
    "value": "1.05",
    "updated_at": "2017-01-08T10:28:20.079Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 303,
    "value": "1.02",
    "updated_at": "2017-01-08T10:28:20.075Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 302,
    "value": "0.98",
    "updated_at": "2017-01-08T10:28:20.071Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 301,
    "value": "0.93",
    "updated_at": "2017-01-08T10:28:20.067Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 300,
    "value": "0.89",
    "updated_at": "2017-01-08T10:28:20.064Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 299,
    "value": "0.84",
    "updated_at": "2017-01-08T10:28:20.060Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 298,
    "value": "0.73",
    "updated_at": "2017-01-08T10:28:20.056Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 297,
    "value": "0.69",
    "updated_at": "2017-01-08T10:28:20.052Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 296,
    "value": "0.65",
    "updated_at": "2017-01-08T10:28:20.049Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 295, "value": "0.6", "updated_at": "2017-01-08T10:28:20.045Z", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 336,
    "value": "166345.0",
    "updated_at": "2017-01-08T10:28:20.200Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 335,
    "value": "225248.0",
    "updated_at": "2017-01-08T10:28:20.197Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 334,
    "value": "201331.0",
    "updated_at": "2017-01-08T10:28:20.193Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 333,
    "value": "288020.0",
    "updated_at": "2017-01-08T10:28:20.189Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 332,
    "value": "387871.0",
    "updated_at": "2017-01-08T10:28:20.185Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 331,
    "value": "155572.0",
    "updated_at": "2017-01-08T10:28:20.181Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 330,
    "value": "152011.0",
    "updated_at": "2017-01-08T10:28:20.177Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 329,
    "value": "141670.0",
    "updated_at": "2017-01-08T10:28:20.174Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 328,
    "value": "148489.0",
    "updated_at": "2017-01-08T10:28:20.170Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 327,
    "value": "176164.0",
    "updated_at": "2017-01-08T10:28:20.166Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 326,
    "value": "158949.0",
    "updated_at": "2017-01-08T10:28:20.163Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 325,
    "value": "130831.0",
    "updated_at": "2017-01-08T10:28:20.159Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 324,
    "value": "154047.0",
    "updated_at": "2017-01-08T10:28:20.155Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 323,
    "value": "257663.0",
    "updated_at": "2017-01-08T10:28:20.151Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 322,
    "value": "223160.0",
    "updated_at": "2017-01-08T10:28:20.148Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 321,
    "value": "334409.0",
    "updated_at": "2017-01-08T10:28:20.144Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 320,
    "value": "494759.0",
    "updated_at": "2017-01-08T10:28:20.141Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 319,
    "value": "166691.0",
    "updated_at": "2017-01-08T10:28:20.137Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 318,
    "value": "164505.0",
    "updated_at": "2017-01-08T10:28:20.134Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 317,
    "value": "154952.0",
    "updated_at": "2017-01-08T10:28:20.130Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 316,
    "value": "182284.0",
    "updated_at": "2017-01-08T10:28:20.126Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 356,
    "value": "0.67",
    "updated_at": "2017-01-08T10:28:20.320Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 355,
    "value": "0.84",
    "updated_at": "2017-01-08T10:28:20.314Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 354,
    "value": "0.75",
    "updated_at": "2017-01-08T10:28:20.307Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 353,
    "value": "1.43",
    "updated_at": "2017-01-08T10:28:20.302Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 352,
    "value": "0.69",
    "updated_at": "2017-01-08T10:28:20.298Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 351,
    "value": "0.58",
    "updated_at": "2017-01-08T10:28:20.288Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 350,
    "value": "0.56",
    "updated_at": "2017-01-08T10:28:20.276Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 349,
    "value": "0.58",
    "updated_at": "2017-01-08T10:28:20.265Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 348, "value": "0.6", "updated_at": "2017-01-08T10:28:20.260Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 347,
    "value": "0.6",
    "updated_at": "2017-01-08T10:28:20.253Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 346,
    "value": "0.54",
    "updated_at": "2017-01-08T10:28:20.246Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 345,
    "value": "0.29",
    "updated_at": "2017-01-08T10:28:20.241Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 344,
    "value": "0.47",
    "updated_at": "2017-01-08T10:28:20.234Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 343,
    "value": "0.41",
    "updated_at": "2017-01-08T10:28:20.230Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 342,
    "value": "0.56",
    "updated_at": "2017-01-08T10:28:20.226Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 341,
    "value": "1.01",
    "updated_at": "2017-01-08T10:28:20.222Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 340,
    "value": "0.32",
    "updated_at": "2017-01-08T10:28:20.218Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 339,
    "value": "0.32",
    "updated_at": "2017-01-08T10:28:20.214Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 338,
    "value": "0.43",
    "updated_at": "2017-01-08T10:28:20.210Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 337,
    "value": "0.41",
    "updated_at": "2017-01-08T10:28:20.207Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 377,
    "value": "1.26",
    "updated_at": "2017-01-08T10:28:20.523Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 376,
    "value": "1.22",
    "updated_at": "2017-01-08T10:28:20.517Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 375,
    "value": "1.26",
    "updated_at": "2017-01-08T10:28:20.510Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 374,
    "value": "1.26",
    "updated_at": "2017-01-08T10:28:20.503Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 373,
    "value": "1.26",
    "updated_at": "2017-01-08T10:28:20.496Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 372,
    "value": "1.23",
    "updated_at": "2017-01-08T10:28:20.490Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 371, "value": "1.2", "updated_at": "2017-01-08T10:28:20.485Z", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 370,
    "value": "1.24",
    "updated_at": "2017-01-08T10:28:20.476Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 369,
    "value": "1.42",
    "updated_at": "2017-01-08T10:28:20.470Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 368,
    "value": "1.04",
    "updated_at": "2017-01-08T10:28:20.464Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 367,
    "value": "1.35",
    "updated_at": "2017-01-08T10:28:20.457Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 366,
    "value": "1.77",
    "updated_at": "2017-01-08T10:28:20.451Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 365,
    "value": "2.96",
    "updated_at": "2017-01-08T10:28:20.435Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 364,
    "value": "2.02",
    "updated_at": "2017-01-08T10:28:20.414Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 363,
    "value": "2.32",
    "updated_at": "2017-01-08T10:28:20.405Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 362,
    "value": "2.01",
    "updated_at": "2017-01-08T10:28:20.398Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 361,
    "value": "1.99",
    "updated_at": "2017-01-08T10:28:20.387Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 360,
    "value": "1.95",
    "updated_at": "2017-01-08T10:28:20.374Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 359,
    "value": "1.87",
    "updated_at": "2017-01-08T10:28:20.364Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 358,
    "value": "1.31",
    "updated_at": "2017-01-08T10:28:20.350Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 357,
    "value": "1.38",
    "updated_at": "2017-01-08T10:28:20.334Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 420,
    "value": "10835358.0",
    "updated_at": "2017-01-08T10:28:20.788Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 419,
    "value": "10669013.0",
    "updated_at": "2017-01-08T10:28:20.783Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 418,
    "value": "10443765.0",
    "updated_at": "2017-01-08T10:28:20.779Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 417,
    "value": "10242434.0",
    "updated_at": "2017-01-08T10:28:20.775Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 416,
    "value": "9954414.0",
    "updated_at": "2017-01-08T10:28:20.770Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 415,
    "value": "9566543.0",
    "updated_at": "2017-01-08T10:28:20.766Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 414,
    "value": "9410971.0",
    "updated_at": "2017-01-08T10:28:20.759Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 413,
    "value": "9258960.0",
    "updated_at": "2017-01-08T10:28:20.753Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 412,
    "value": "9117290.0",
    "updated_at": "2017-01-08T10:28:20.749Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 411,
    "value": "8968801.0",
    "updated_at": "2017-01-08T10:28:20.745Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 410,
    "value": "8792637.0",
    "updated_at": "2017-01-08T10:28:20.740Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 409,
    "value": "8633688.0",
    "updated_at": "2017-01-08T10:28:20.736Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 408,
    "value": "8502857.0",
    "updated_at": "2017-01-08T10:28:20.730Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 407,
    "value": "8348810.0",
    "updated_at": "2017-01-08T10:28:20.720Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 406,
    "value": "8091147.0",
    "updated_at": "2017-01-08T10:28:20.715Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 405,
    "value": "7867987.0",
    "updated_at": "2017-01-08T10:28:20.711Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 404,
    "value": "7533578.0",
    "updated_at": "2017-01-08T10:28:20.707Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 403,
    "value": "7038819.0",
    "updated_at": "2017-01-08T10:28:20.701Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 402,
    "value": "6872128.0",
    "updated_at": "2017-01-08T10:28:20.690Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 401,
    "value": "6707623.0",
    "updated_at": "2017-01-08T10:28:20.686Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 400,
    "value": "6552671.0",
    "updated_at": "2017-01-08T10:28:20.683Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 399,
    "value": "6370387.0",
    "updated_at": "2017-01-08T10:28:20.677Z",
    "ts": "2015-02-01 00:00:00.000"
  }, {
    "id": 398,
    "value": "6224366.0",
    "updated_at": "2017-01-08T10:28:20.672Z",
    "ts": "2015-01-01 00:00:00.000"
  }, {
    "id": 397,
    "value": "6100676.0",
    "updated_at": "2017-01-08T10:28:20.667Z",
    "ts": "2014-12-01 00:00:00.000"
  }, {
    "id": 396,
    "value": "5999398.0",
    "updated_at": "2017-01-08T10:28:20.663Z",
    "ts": "2014-11-01 00:00:00.000"
  }, {
    "id": 395,
    "value": "5853250.0",
    "updated_at": "2017-01-08T10:28:20.660Z",
    "ts": "2014-10-01 00:00:00.000"
  }, {
    "id": 394,
    "value": "5220496.0",
    "updated_at": "2017-01-08T10:28:20.656Z",
    "ts": "2014-09-01 00:00:00.000"
  }, {
    "id": 393,
    "value": "4775605.0",
    "updated_at": "2017-01-08T10:28:20.652Z",
    "ts": "2014-08-01 00:00:00.000"
  }, {
    "id": 392,
    "value": "4109819.0",
    "updated_at": "2017-01-08T10:28:20.648Z",
    "ts": "2014-07-01 00:00:00.000"
  }, {
    "id": 391,
    "value": "2923386.0",
    "updated_at": "2017-01-08T10:28:20.642Z",
    "ts": "2014-06-01 00:00:00.000"
  }, {
    "id": 390,
    "value": "2752832.0",
    "updated_at": "2017-01-08T10:28:20.638Z",
    "ts": "2014-05-01 00:00:00.000"
  }, {
    "id": 389,
    "value": "2605269.0",
    "updated_at": "2017-01-08T10:28:20.635Z",
    "ts": "2014-04-01 00:00:00.000"
  }, {
    "id": 388,
    "value": "2490089.0",
    "updated_at": "2017-01-08T10:28:20.631Z",
    "ts": "2014-03-01 00:00:00.000"
  }, {
    "id": 387,
    "value": "2373578.0",
    "updated_at": "2017-01-08T10:28:20.625Z",
    "ts": "2014-02-01 00:00:00.000"
  }, {
    "id": 386,
    "value": "2257796.0",
    "updated_at": "2017-01-08T10:28:20.621Z",
    "ts": "2014-01-01 00:00:00.000"
  }, {
    "id": 385,
    "value": "2146290.0",
    "updated_at": "2017-01-08T10:28:20.614Z",
    "ts": "2013-12-01 00:00:00.000"
  }, {
    "id": 384,
    "value": "2062742.0",
    "updated_at": "2017-01-08T10:28:20.610Z",
    "ts": "2013-11-01 00:00:00.000"
  }, {
    "id": 383,
    "value": "1945613.0",
    "updated_at": "2017-01-08T10:28:20.604Z",
    "ts": "2013-10-01 00:00:00.000"
  }, {
    "id": 382,
    "value": "1824121.0",
    "updated_at": "2017-01-08T10:28:20.598Z",
    "ts": "2013-09-01 00:00:00.000"
  }, {
    "id": 381,
    "value": "1740113.0",
    "updated_at": "2017-01-08T10:28:20.578Z",
    "ts": "2013-08-01 00:00:00.000"
  }, {
    "id": 380,
    "value": "1628151.0",
    "updated_at": "2017-01-08T10:28:20.570Z",
    "ts": "2013-07-01 00:00:00.000"
  }, {
    "id": 379,
    "value": "1477505.0",
    "updated_at": "2017-01-08T10:28:20.547Z",
    "ts": "2013-06-01 00:00:00.000"
  }, {
    "id": 378,
    "value": "1368549.0",
    "updated_at": "2017-01-08T10:28:20.534Z",
    "ts": "2013-05-01 00:00:00.000"
  }, {
    "id": 441,
    "value": "28.51",
    "updated_at": "2017-01-08T10:28:20.936Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 440,
    "value": "28.47",
    "updated_at": "2017-01-08T10:28:20.931Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 439,
    "value": "28.48",
    "updated_at": "2017-01-08T10:28:20.926Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 438,
    "value": "28.0",
    "updated_at": "2017-01-08T10:28:20.918Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 437,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.911Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 436,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.907Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 435,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.902Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 434,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.894Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 433,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.890Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 432,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.886Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 431,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.878Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 430,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.858Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 429,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.853Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 428,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.839Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 427,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.827Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 426,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.820Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 425,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.816Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 424,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.810Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 423,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.805Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 422,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.800Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 421,
    "value": "29.0",
    "updated_at": "2017-01-08T10:28:20.795Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 462,
    "value": "27.57",
    "updated_at": "2017-01-08T10:28:21.070Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 461,
    "value": "27.57",
    "updated_at": "2017-01-08T10:28:21.066Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 460,
    "value": "27.67",
    "updated_at": "2017-01-08T10:28:21.057Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 459,
    "value": "28.0",
    "updated_at": "2017-01-08T10:28:21.048Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 458,
    "value": "28.0",
    "updated_at": "2017-01-08T10:28:21.044Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 457,
    "value": "28.0",
    "updated_at": "2017-01-08T10:28:21.040Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 456,
    "value": "28.0",
    "updated_at": "2017-01-08T10:28:21.033Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 455,
    "value": "28.0",
    "updated_at": "2017-01-08T10:28:21.021Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 454,
    "value": "28.0",
    "updated_at": "2017-01-08T10:28:21.017Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 453,
    "value": "28.0",
    "updated_at": "2017-01-08T10:28:21.011Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 452,
    "value": "28.0",
    "updated_at": "2017-01-08T10:28:21.007Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 451,
    "value": "28.0",
    "updated_at": "2017-01-08T10:28:21.004Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 450,
    "value": "27.0",
    "updated_at": "2017-01-08T10:28:21.000Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 449,
    "value": "27.0",
    "updated_at": "2017-01-08T10:28:20.996Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 448,
    "value": "27.0",
    "updated_at": "2017-01-08T10:28:20.992Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 447,
    "value": "27.0",
    "updated_at": "2017-01-08T10:28:20.988Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 446,
    "value": "27.0",
    "updated_at": "2017-01-08T10:28:20.983Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 445,
    "value": "26.0",
    "updated_at": "2017-01-08T10:28:20.971Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 444,
    "value": "26.0",
    "updated_at": "2017-01-08T10:28:20.967Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 443,
    "value": "25.0",
    "updated_at": "2017-01-08T10:28:20.963Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 442,
    "value": "25.0",
    "updated_at": "2017-01-08T10:28:20.959Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 483,
    "value": "2.49",
    "updated_at": "2017-01-08T10:28:21.170Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 482,
    "value": "2.49",
    "updated_at": "2017-01-08T10:28:21.165Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 481,
    "value": "2.51",
    "updated_at": "2017-01-08T10:28:21.159Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 480, "value": "3.0", "updated_at": "2017-01-08T10:28:21.154Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 479,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.149Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 478, "value": "3.0", "updated_at": "2017-01-08T10:28:21.143Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 477,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.137Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 476, "value": "3.0", "updated_at": "2017-01-08T10:28:21.133Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 475,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.129Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 474, "value": "3.0", "updated_at": "2017-01-08T10:28:21.124Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 473,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.120Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 472, "value": "3.0", "updated_at": "2017-01-08T10:28:21.114Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 471,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.110Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 470, "value": "3.0", "updated_at": "2017-01-08T10:28:21.104Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 469,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.100Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 468, "value": "3.0", "updated_at": "2017-01-08T10:28:21.096Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 467,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.092Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 466, "value": "3.0", "updated_at": "2017-01-08T10:28:21.088Z", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 465,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.084Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 464, "value": "3.0", "updated_at": "2017-01-08T10:28:21.081Z", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 463,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.077Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 504, "value": "7.2", "updated_at": "2017-01-08T10:28:21.390Z", "ts": "2016-11-01 00:00:00.000"}, {
    "id": 503,
    "value": "7.16",
    "updated_at": "2017-01-08T10:28:21.375Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 502,
    "value": "7.13",
    "updated_at": "2017-01-08T10:28:21.365Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 501, "value": "7.0", "updated_at": "2017-01-08T10:28:21.348Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 500,
    "value": "7.0",
    "updated_at": "2017-01-08T10:28:21.338Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 499, "value": "7.0", "updated_at": "2017-01-08T10:28:21.328Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 498,
    "value": "7.0",
    "updated_at": "2017-01-08T10:28:21.311Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 497, "value": "7.0", "updated_at": "2017-01-08T10:28:21.294Z", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 496,
    "value": "7.0",
    "updated_at": "2017-01-08T10:28:21.282Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 495, "value": "7.0", "updated_at": "2017-01-08T10:28:21.265Z", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 494,
    "value": "7.0",
    "updated_at": "2017-01-08T10:28:21.254Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 493, "value": "7.0", "updated_at": "2017-01-08T10:28:21.246Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 492,
    "value": "7.0",
    "updated_at": "2017-01-08T10:28:21.233Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 491, "value": "7.0", "updated_at": "2017-01-08T10:28:21.225Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 490,
    "value": "7.0",
    "updated_at": "2017-01-08T10:28:21.221Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 489, "value": "7.0", "updated_at": "2017-01-08T10:28:21.214Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 488,
    "value": "7.0",
    "updated_at": "2017-01-08T10:28:21.206Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 487, "value": "8.0", "updated_at": "2017-01-08T10:28:21.197Z", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 486,
    "value": "8.0",
    "updated_at": "2017-01-08T10:28:21.190Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 485, "value": "8.0", "updated_at": "2017-01-08T10:28:21.186Z", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 484,
    "value": "8.0",
    "updated_at": "2017-01-08T10:28:21.179Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 525,
    "value": "30.28",
    "updated_at": "2017-01-08T10:28:21.705Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 524,
    "value": "30.63",
    "updated_at": "2017-01-08T10:28:21.688Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 523,
    "value": "30.52",
    "updated_at": "2017-01-08T10:28:21.672Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 522,
    "value": "31.0",
    "updated_at": "2017-01-08T10:28:21.656Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 521,
    "value": "30.0",
    "updated_at": "2017-01-08T10:28:21.641Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 520,
    "value": "30.0",
    "updated_at": "2017-01-08T10:28:21.625Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 519,
    "value": "30.0",
    "updated_at": "2017-01-08T10:28:21.613Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 518,
    "value": "31.0",
    "updated_at": "2017-01-08T10:28:21.596Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 517,
    "value": "31.0",
    "updated_at": "2017-01-08T10:28:21.585Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 516,
    "value": "32.0",
    "updated_at": "2017-01-08T10:28:21.570Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 515,
    "value": "32.0",
    "updated_at": "2017-01-08T10:28:21.556Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 514,
    "value": "33.0",
    "updated_at": "2017-01-08T10:28:21.538Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 513,
    "value": "33.0",
    "updated_at": "2017-01-08T10:28:21.527Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 512,
    "value": "33.0",
    "updated_at": "2017-01-08T10:28:21.510Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 511,
    "value": "33.0",
    "updated_at": "2017-01-08T10:28:21.499Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 510,
    "value": "33.0",
    "updated_at": "2017-01-08T10:28:21.482Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 509,
    "value": "33.0",
    "updated_at": "2017-01-08T10:28:21.471Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 508,
    "value": "33.0",
    "updated_at": "2017-01-08T10:28:21.455Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 507,
    "value": "33.0",
    "updated_at": "2017-01-08T10:28:21.443Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 506,
    "value": "34.0",
    "updated_at": "2017-01-08T10:28:21.426Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 505,
    "value": "34.0",
    "updated_at": "2017-01-08T10:28:21.416Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 546,
    "value": "3.95",
    "updated_at": "2017-01-08T10:28:22.028Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 545,
    "value": "3.68",
    "updated_at": "2017-01-08T10:28:22.017Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 544, "value": "3.7", "updated_at": "2017-01-08T10:28:22.004Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 543,
    "value": "4.0",
    "updated_at": "2017-01-08T10:28:21.984Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 542, "value": "3.0", "updated_at": "2017-01-08T10:28:21.968Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 541,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.958Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 540, "value": "3.0", "updated_at": "2017-01-08T10:28:21.943Z", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 539,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.931Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 538, "value": "3.0", "updated_at": "2017-01-08T10:28:21.912Z", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 537,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.901Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 536, "value": "3.0", "updated_at": "2017-01-08T10:28:21.888Z", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 535,
    "value": "3.0",
    "updated_at": "2017-01-08T10:28:21.873Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 534, "value": "3.0", "updated_at": "2017-01-08T10:28:21.856Z", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 533,
    "value": "2.0",
    "updated_at": "2017-01-08T10:28:21.840Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 532, "value": "2.0", "updated_at": "2017-01-08T10:28:21.823Z", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 531,
    "value": "2.0",
    "updated_at": "2017-01-08T10:28:21.808Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 530, "value": "2.0", "updated_at": "2017-01-08T10:28:21.792Z", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 529,
    "value": "2.0",
    "updated_at": "2017-01-08T10:28:21.781Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 528, "value": "2.0", "updated_at": "2017-01-08T10:28:21.765Z", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 527,
    "value": "2.0",
    "updated_at": "2017-01-08T10:28:21.755Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 526, "value": "2.0", "updated_at": "2017-01-08T10:28:21.735Z", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 585,
    "value": null,
    "updated_at": "2017-01-08T10:28:22.653Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {"id": 584, "value": null, "updated_at": "2017-01-08T10:28:22.621Z", "ts": "2016-10-01 00:00:00.000"}, {
    "id": 583,
    "value": null,
    "updated_at": "2017-01-08T10:28:22.601Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {"id": 582, "value": null, "updated_at": "2017-01-08T10:28:22.579Z", "ts": "2016-08-01 00:00:00.000"}, {
    "id": 581,
    "value": null,
    "updated_at": "2017-01-08T10:28:22.559Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 580, "value": null, "updated_at": "2017-01-08T10:28:22.539Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 579,
    "value": null,
    "updated_at": "2017-01-08T10:28:22.505Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 578,
    "value": "82.07",
    "updated_at": "2017-01-08T10:28:22.488Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 577,
    "value": "80.71",
    "updated_at": "2017-01-08T10:28:22.472Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 576,
    "value": "80.7",
    "updated_at": "2017-01-08T10:28:22.455Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 575,
    "value": "78.82",
    "updated_at": "2017-01-08T10:28:22.443Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 574, "value": null, "updated_at": "2017-01-08T10:28:22.430Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 573,
    "value": null,
    "updated_at": "2017-01-08T10:28:22.425Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 572, "value": null, "updated_at": "2017-01-08T10:28:22.414Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 571,
    "value": null,
    "updated_at": "2017-01-08T10:28:22.403Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 570, "value": null, "updated_at": "2017-01-08T10:28:22.397Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 569,
    "value": "78.5",
    "updated_at": "2017-01-08T10:28:22.386Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 568,
    "value": "76.88",
    "updated_at": "2017-01-08T10:28:22.382Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 567,
    "value": "76.32",
    "updated_at": "2017-01-08T10:28:22.370Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 566,
    "value": "76.29",
    "updated_at": "2017-01-08T10:28:22.356Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 565,
    "value": "76.55",
    "updated_at": "2017-01-08T10:28:22.338Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 605, "value": null, "updated_at": "2017-01-08T10:28:23.245Z", "ts": "2016-11-01 00:00:00.000"}, {
    "id": 604,
    "value": null,
    "updated_at": "2017-01-08T10:28:23.227Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 603, "value": null, "updated_at": "2017-01-08T10:28:23.216Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 602,
    "value": null,
    "updated_at": "2017-01-08T10:28:23.204Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 601, "value": null, "updated_at": "2017-01-08T10:28:23.186Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 600,
    "value": null,
    "updated_at": "2017-01-08T10:28:23.173Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 599,
    "value": "11.81",
    "updated_at": "2017-01-08T10:28:23.159Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 598,
    "value": "12.65",
    "updated_at": "2017-01-08T10:28:23.140Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 597,
    "value": "12.43",
    "updated_at": "2017-01-08T10:28:23.123Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 596,
    "value": "13.82",
    "updated_at": "2017-01-08T10:28:23.106Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 595, "value": null, "updated_at": "2017-01-08T10:28:23.099Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 594,
    "value": null,
    "updated_at": "2017-01-08T10:28:23.094Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 593, "value": null, "updated_at": "2017-01-08T10:28:23.080Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 592,
    "value": null,
    "updated_at": "2017-01-08T10:28:23.060Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 591, "value": null, "updated_at": "2017-01-08T10:28:22.888Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 590,
    "value": "14.4",
    "updated_at": "2017-01-08T10:28:22.865Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 589,
    "value": "14.4",
    "updated_at": "2017-01-08T10:28:22.854Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 588,
    "value": "14.15",
    "updated_at": "2017-01-08T10:28:22.842Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 587,
    "value": "14.42",
    "updated_at": "2017-01-08T10:28:22.829Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 586,
    "value": "14.02",
    "updated_at": "2017-01-08T10:28:22.696Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 625, "value": null, "updated_at": "2017-01-08T10:28:23.590Z", "ts": "2016-11-01 00:00:00.000"}, {
    "id": 624,
    "value": null,
    "updated_at": "2017-01-08T10:28:23.574Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {"id": 623, "value": null, "updated_at": "2017-01-08T10:28:23.563Z", "ts": "2016-09-01 00:00:00.000"}, {
    "id": 622,
    "value": null,
    "updated_at": "2017-01-08T10:28:23.550Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 621, "value": null, "updated_at": "2017-01-08T10:28:23.531Z", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 620,
    "value": null,
    "updated_at": "2017-01-08T10:28:23.524Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 619,
    "value": "6.12",
    "updated_at": "2017-01-08T10:28:23.518Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 618,
    "value": "6.64",
    "updated_at": "2017-01-08T10:28:23.506Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 617,
    "value": "6.87",
    "updated_at": "2017-01-08T10:28:23.494Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 616,
    "value": "7.36",
    "updated_at": "2017-01-08T10:28:23.471Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 615, "value": null, "updated_at": "2017-01-08T10:28:23.418Z", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 614,
    "value": null,
    "updated_at": "2017-01-08T10:28:23.396Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 613, "value": null, "updated_at": "2017-01-08T10:28:23.373Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 612,
    "value": null,
    "updated_at": "2017-01-08T10:28:23.360Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 611, "value": null, "updated_at": "2017-01-08T10:28:23.348Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 610,
    "value": "7.68",
    "updated_at": "2017-01-08T10:28:23.336Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 609,
    "value": "8.72",
    "updated_at": "2017-01-08T10:28:23.321Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 608,
    "value": "9.53",
    "updated_at": "2017-01-08T10:28:23.308Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 607,
    "value": "9.29",
    "updated_at": "2017-01-08T10:28:23.292Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 606,
    "value": "9.43",
    "updated_at": "2017-01-08T10:28:23.280Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 646,
    "value": "12.27",
    "updated_at": "2017-01-08T10:28:23.791Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 645,
    "value": "9.89",
    "updated_at": "2017-01-08T10:28:23.779Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 644,
    "value": "10.28",
    "updated_at": "2017-01-08T10:28:23.767Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 643,
    "value": "8.81",
    "updated_at": "2017-01-08T10:28:23.755Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 642,
    "value": "7.39",
    "updated_at": "2017-01-08T10:28:23.749Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 641,
    "value": "14.79",
    "updated_at": "2017-01-08T10:28:23.744Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 640,
    "value": "15.44",
    "updated_at": "2017-01-08T10:28:23.738Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 639,
    "value": "12.14",
    "updated_at": "2017-01-08T10:28:23.733Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 638,
    "value": "12.14",
    "updated_at": "2017-01-08T10:28:23.727Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 637,
    "value": "12.79",
    "updated_at": "2017-01-08T10:28:23.720Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 636,
    "value": "11.18",
    "updated_at": "2017-01-08T10:28:23.714Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 635,
    "value": "9.12",
    "updated_at": "2017-01-08T10:28:23.707Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 634,
    "value": "10.77",
    "updated_at": "2017-01-08T10:28:23.701Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 633,
    "value": "10.23",
    "updated_at": "2017-01-08T10:28:23.693Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 632,
    "value": "10.84",
    "updated_at": "2017-01-08T10:28:23.672Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 631, "value": "9.5", "updated_at": "2017-01-08T10:28:23.644Z", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 630,
    "value": "6.95",
    "updated_at": "2017-01-08T10:28:23.633Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 629,
    "value": "15.26",
    "updated_at": "2017-01-08T10:28:23.625Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 628,
    "value": "16.28",
    "updated_at": "2017-01-08T10:28:23.616Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 627,
    "value": "17.7",
    "updated_at": "2017-01-08T10:28:23.609Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 626,
    "value": "18.61",
    "updated_at": "2017-01-08T10:28:23.603Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 667,
    "value": "47.92",
    "updated_at": "2017-01-08T10:28:24.136Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 666,
    "value": "37.21",
    "updated_at": "2017-01-08T10:28:24.128Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 665,
    "value": "42.06",
    "updated_at": "2017-01-08T10:28:24.118Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 664,
    "value": "38.82",
    "updated_at": "2017-01-08T10:28:24.112Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 663,
    "value": "36.42",
    "updated_at": "2017-01-08T10:28:24.105Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 662,
    "value": "55.7",
    "updated_at": "2017-01-08T10:28:24.098Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 661,
    "value": "52.55",
    "updated_at": "2017-01-08T10:28:24.087Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 660,
    "value": "55.51",
    "updated_at": "2017-01-08T10:28:24.072Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 659,
    "value": "61.76",
    "updated_at": "2017-01-08T10:28:24.051Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 658,
    "value": "55.08",
    "updated_at": "2017-01-08T10:28:24.013Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 657,
    "value": "61.33",
    "updated_at": "2017-01-08T10:28:23.996Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 656,
    "value": "64.47",
    "updated_at": "2017-01-08T10:28:23.984Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 655,
    "value": "52.06",
    "updated_at": "2017-01-08T10:28:23.971Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 654,
    "value": "38.89",
    "updated_at": "2017-01-08T10:28:23.964Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 653,
    "value": "45.85",
    "updated_at": "2017-01-08T10:28:23.932Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 652,
    "value": "35.95",
    "updated_at": "2017-01-08T10:28:23.920Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 651,
    "value": "33.42",
    "updated_at": "2017-01-08T10:28:23.903Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 650,
    "value": "56.55",
    "updated_at": "2017-01-08T10:28:23.889Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 649,
    "value": "54.7",
    "updated_at": "2017-01-08T10:28:23.851Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 648,
    "value": "51.52",
    "updated_at": "2017-01-08T10:28:23.838Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 647,
    "value": "54.23",
    "updated_at": "2017-01-08T10:28:23.826Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 688,
    "value": "10.19",
    "updated_at": "2017-01-08T10:28:24.347Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 687,
    "value": "8.49",
    "updated_at": "2017-01-08T10:28:24.342Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 686,
    "value": "9.22",
    "updated_at": "2017-01-08T10:28:24.335Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 685,
    "value": "8.33",
    "updated_at": "2017-01-08T10:28:24.330Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 684,
    "value": "5.63",
    "updated_at": "2017-01-08T10:28:24.325Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 683,
    "value": "8.36",
    "updated_at": "2017-01-08T10:28:24.316Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 682,
    "value": "10.26",
    "updated_at": "2017-01-08T10:28:24.311Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 681,
    "value": "10.37",
    "updated_at": "2017-01-08T10:28:24.307Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 680,
    "value": "8.72",
    "updated_at": "2017-01-08T10:28:24.291Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 679,
    "value": "9.05",
    "updated_at": "2017-01-08T10:28:24.280Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 678,
    "value": "9.15",
    "updated_at": "2017-01-08T10:28:24.266Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 677,
    "value": "11.55",
    "updated_at": "2017-01-08T10:28:24.254Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 676,
    "value": "8.75",
    "updated_at": "2017-01-08T10:28:24.238Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 675,
    "value": "8.27",
    "updated_at": "2017-01-08T10:28:24.229Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 674,
    "value": "8.03",
    "updated_at": "2017-01-08T10:28:24.221Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 673,
    "value": "7.21",
    "updated_at": "2017-01-08T10:28:24.214Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 672,
    "value": "5.15",
    "updated_at": "2017-01-08T10:28:24.197Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 671,
    "value": "12.29",
    "updated_at": "2017-01-08T10:28:24.187Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 670,
    "value": "12.69",
    "updated_at": "2017-01-08T10:28:24.174Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 669,
    "value": "13.19",
    "updated_at": "2017-01-08T10:28:24.165Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 668,
    "value": "14.38",
    "updated_at": "2017-01-08T10:28:24.154Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 709,
    "value": "22.52",
    "updated_at": "2017-01-08T10:28:24.476Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 708,
    "value": "38.45",
    "updated_at": "2017-01-08T10:28:24.472Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 707,
    "value": "31.93",
    "updated_at": "2017-01-08T10:28:24.468Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 706,
    "value": "38.41",
    "updated_at": "2017-01-08T10:28:24.464Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {
    "id": 705,
    "value": "46.76",
    "updated_at": "2017-01-08T10:28:24.460Z",
    "ts": "2016-07-01 00:00:00.000"
  }, {
    "id": 704,
    "value": "14.92",
    "updated_at": "2017-01-08T10:28:24.456Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 703,
    "value": "14.33",
    "updated_at": "2017-01-08T10:28:24.453Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 702,
    "value": "13.0",
    "updated_at": "2017-01-08T10:28:24.449Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 701,
    "value": "11.57",
    "updated_at": "2017-01-08T10:28:24.445Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 700,
    "value": "16.24",
    "updated_at": "2017-01-08T10:28:24.441Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 699,
    "value": "12.99",
    "updated_at": "2017-01-08T10:28:24.437Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 698,
    "value": "10.92",
    "updated_at": "2017-01-08T10:28:24.434Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 697,
    "value": "23.75",
    "updated_at": "2017-01-08T10:28:24.424Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {
    "id": 696,
    "value": "38.11",
    "updated_at": "2017-01-08T10:28:24.419Z",
    "ts": "2015-10-01 00:00:00.000"
  }, {
    "id": 695,
    "value": "30.39",
    "updated_at": "2017-01-08T10:28:24.405Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 694,
    "value": "42.79",
    "updated_at": "2017-01-08T10:28:24.398Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 693,
    "value": "51.85",
    "updated_at": "2017-01-08T10:28:24.393Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 692,
    "value": "11.65",
    "updated_at": "2017-01-08T10:28:24.388Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 691,
    "value": "12.07",
    "updated_at": "2017-01-08T10:28:24.383Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 690,
    "value": "12.95",
    "updated_at": "2017-01-08T10:28:24.379Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {
    "id": 689,
    "value": "8.02",
    "updated_at": "2017-01-08T10:28:24.365Z",
    "ts": "2015-03-01 00:00:00.000"
  }, {
    "id": 730,
    "value": "5.42",
    "updated_at": "2017-01-08T10:28:24.561Z",
    "ts": "2016-11-01 00:00:00.000"
  }, {
    "id": 729,
    "value": "4.39",
    "updated_at": "2017-01-08T10:28:24.556Z",
    "ts": "2016-10-01 00:00:00.000"
  }, {
    "id": 728,
    "value": "4.74",
    "updated_at": "2017-01-08T10:28:24.552Z",
    "ts": "2016-09-01 00:00:00.000"
  }, {
    "id": 727,
    "value": "5.63",
    "updated_at": "2017-01-08T10:28:24.548Z",
    "ts": "2016-08-01 00:00:00.000"
  }, {"id": 726, "value": "3.8", "updated_at": "2017-01-08T10:28:24.544Z", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 725,
    "value": "6.23",
    "updated_at": "2017-01-08T10:28:24.540Z",
    "ts": "2016-06-01 00:00:00.000"
  }, {
    "id": 724,
    "value": "7.42",
    "updated_at": "2017-01-08T10:28:24.536Z",
    "ts": "2016-05-01 00:00:00.000"
  }, {
    "id": 723,
    "value": "6.73",
    "updated_at": "2017-01-08T10:28:24.532Z",
    "ts": "2016-04-01 00:00:00.000"
  }, {
    "id": 722,
    "value": "5.81",
    "updated_at": "2017-01-08T10:28:24.528Z",
    "ts": "2016-03-01 00:00:00.000"
  }, {
    "id": 721,
    "value": "6.84",
    "updated_at": "2017-01-08T10:28:24.524Z",
    "ts": "2016-02-01 00:00:00.000"
  }, {
    "id": 720,
    "value": "5.35",
    "updated_at": "2017-01-08T10:28:24.521Z",
    "ts": "2016-01-01 00:00:00.000"
  }, {
    "id": 719,
    "value": "3.93",
    "updated_at": "2017-01-08T10:28:24.517Z",
    "ts": "2015-12-01 00:00:00.000"
  }, {
    "id": 718,
    "value": "4.67",
    "updated_at": "2017-01-08T10:28:24.513Z",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 717, "value": "4.5", "updated_at": "2017-01-08T10:28:24.509Z", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 716,
    "value": "4.89",
    "updated_at": "2017-01-08T10:28:24.505Z",
    "ts": "2015-09-01 00:00:00.000"
  }, {
    "id": 715,
    "value": "4.55",
    "updated_at": "2017-01-08T10:28:24.501Z",
    "ts": "2015-08-01 00:00:00.000"
  }, {
    "id": 714,
    "value": "2.63",
    "updated_at": "2017-01-08T10:28:24.497Z",
    "ts": "2015-07-01 00:00:00.000"
  }, {
    "id": 713,
    "value": "4.25",
    "updated_at": "2017-01-08T10:28:24.494Z",
    "ts": "2015-06-01 00:00:00.000"
  }, {
    "id": 712,
    "value": "4.27",
    "updated_at": "2017-01-08T10:28:24.490Z",
    "ts": "2015-05-01 00:00:00.000"
  }, {
    "id": 711,
    "value": "4.65",
    "updated_at": "2017-01-08T10:28:24.486Z",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 710, "value": "4.75", "updated_at": "2017-01-08T10:28:24.482Z", "ts": "2015-03-01 00:00:00.000"}]
}
