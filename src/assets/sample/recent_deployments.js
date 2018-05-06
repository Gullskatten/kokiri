export const recentDeployments = [
  {
    "id": 1,
    "application": {
      "id": 1,
      "name": "Kokiri",
      "description": "CI&CD project management tool.",
      "url": "https://fyfader.no",
      "icon": "rocket",
      "createdAt": "2018-05-05T00:00:00.000Z",
      "createdBy": "oboygutt",
      "updatedAt": "2018-05-05T10:00:00.000Z",
      "type": {
        "id": 1,
        "name": "Application Management"
      },
      "status": {
        "id": 1,
        "name": "In Production"
      }
    },
    "version": {
      "id": 123,
      "name": "Release 1.0",
      "applicationReference": 1
    },
    "environment": {
      "id": 1,
      "name": "Local development (oboygutt)",
      "description": "Espens lokale miljø..",
      "ip": "133.2.28.58",
      "createdAt": "2018-05-05T00:00:00.000Z",
      "createdBy": "oboygutt",
      "updatedAt": "2018-05-05T10:00:00.000Z",
      "icon": "server",
      "type": {
        "id": 1,
        "name": "Development"
      }
    },
    "status": {
      "id": 3,
      "name": "Completed",
      "description": "This deployment was successful.",
      "key": "COMPLETED",
      "icon": "check"
    },
    "createdAt": "2018-05-07T19:15:23.000Z",
    "createdBy": "oboygutt"
  },
  {
    "id": 2,
    "application": {
      "id": 2,
      "name": "GitHub",
      "description": "Version control tool.",
      "url": "https://github.com/GUDESP1/kokiri",
      "icon": "github",
      "createdAt": "2012-05-05T00:00:00.000Z",
      "createdBy": "SYSTEM",
      "updatedAt": "2018-05-05T10:00:00.000Z",
      "type": {
        "id": 2,
        "name": "Version Control"
      },
      "status": {
        "id": 1,
        "name": "In Production"
      }
    },
    "version": {
      "id": 223,
      "name": "commit 3sa01123z2 (develop)",
      "applicationReference": 2
    },
    "environment": {
      "id": 2,
      "name": "GitHub QA Environment 3",
      "description": "GitHub test/QA environment",
      "ip": "133.2.28.58",
      "createdAt": "2018-05-05T00:00:00.000Z",
      "createdBy": "oboygutt",
      "updatedAt": "2018-05-05T10:00:00.000Z",
      "icon": "leaf",
      "type": {
        "id": 1,
        "name": "Development"
      }
    },
    "status": {
      "id": 3,
      "name": "Completed",
      "description": "This deployment was successful.",
      "key": "COMPLETED",
      "icon": "check"
    },
    "createdAt": "2013-04-04T13:15:23.000Z",
    "createdBy": "RausMedSaus"
  },
  {
    "id": 3,
    "application": {
      "id": 3,
      "name": "Deku Tree",
      "description": "Development blog.",
      "url": "https://github.com/GUDESP1/deku",
      "icon": "tree",
      "createdAt": "2015-05-05T00:00:00.000Z",
      "createdBy": "SYSTEM",
      "updatedAt": "2018-05-05T10:00:00.000Z",
      "type": {
        "id": 5,
        "name": "Blog"
      },
      "status": {
        "id": 1,
        "name": "In Production"
      }
    },
    "version": {
      "id": 23,
      "name": "commit 4zu992bk0a (develop)",
      "applicationReference": 3
    },
    "environment": {
      "id": 1,
      "name": "Local development (oboygutt)",
      "description": "Espens lokale miljø..",
      "ip": "133.2.28.58",
      "createdAt": "2018-05-05T00:00:00.000Z",
      "createdBy": "oboygutt",
      "updatedAt": "2018-05-05T10:00:00.000Z",
      "icon": "server",
      "type": {
        "id": 1,
        "name": "Development"
      }
    },
    "status": {
      "id": 2,
      "name": "In Progress",
      "description": "Deployment is in progress...",
      "key": "IN_PROGRESS",
      "icon": "refresh"
    },
    "createdAt": "2018-05-07T08:15:23.000Z",
    "createdBy": "oboygutt"
  }
]
