export const recentDeployments = [
  {
    "id": 1,
    "description": "Release 1.0 oppdatering til lokalt miljø",
    "system": {
      "id": 1,
      "name": "Kokiri",
      "description": "CI&CD Project Management Tool.",
      "url": "https://fyfader.no",
      "icon": "rocket",
      "createdAt": "2018-05-05T00:00:00.000Z",
      "createdBy": "oboygutt",
      "updatedAt": "2018-05-05T10:00:00.000Z",
      "type": {
        "id": 32,
        "name": "Application Management"
      },
      "status": {
        "id": 1,
        "name": "In Production"
      },
      "applications": [
        {
          "id": 1,
          "name": "Kokiri Web",
          "description": "Web application written in React.",
          "icon": "paper-plane",
          "port": 3000,
          "createdAt": "2018-04-03T00:00:00.000Z",
          "createdBy": "oboygutt",
          "updatedAt": "2018-04-06T10:00:00.000Z",
          "type": {
            "id": 1,
            "name": "Web Application"
          },
          "status": {
            "id": 1,
            "name": "In Production"
          },
          "branch": {
            "name": "release/1.0",
            "commit": "121ce2b"
          }
        },
        {
          "id": 2,
          "name": "Kokiri API",
          "description": "API written in Java (Dropwizard).",
          "url": "https://swagger.fyfader.no/",
          "port": 8080,
          "icon": "feed",
          "createdAt": "2018-05-08T00:00:00.000Z",
          "createdBy": "oboygutt",
          "updatedAt": "2018-05-08T10:00:00.000Z",
          "type": {
            "id": 2,
            "name": "API"
          },
          "status": {
            "id": 1,
            "name": "In Production"
          },
          "branch": {
            "name": "release/1.0",
            "commit": "b993f33"
          }
        },
        {
          "id": 3,
          "name": "Kokiri Database",
          "description": "PostgreSQL database.",
          "icon": "database",
          "createdAt": "2018-05-08T00:00:00.000Z",
          "createdBy": "oboygutt",
          "updatedAt": "2018-05-08T10:00:00.000Z",
          "type": {
            "id": 3,
            "name": "Database"
          },
          "status": {
            "id": 1,
            "name": "In Production"
          },
          "branch": {
            "name": "develop",
            "commit": "c683q22"
          }
        }
      ]
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
    "description": "Deploy to staging environment..",
    "system": {
      "id": 2,
      "name": "DYNO",
      "description": "Real-time Messaging App.",
      "url": "https://dyno.no",
      "icon": "pied-piper",
      "createdAt": "2018-05-05T00:00:00.000Z",
      "createdBy": "TrudeLutt32",
      "updatedAt": "2018-05-05T10:00:00.000Z",
      "type": {
        "id": 22,
        "name": "Messaging Client"
      },
      "status": {
        "id": 2,
        "name": "In Development"
      },
      "applications": [
        {
          "id": 6,
          "name": "DYNO Web",
          "description": "Web application written in React.",
          "icon": "window-maximize",
          "port": 3000,
          "createdAt": "2018-04-03T00:00:00.000Z",
          "createdBy": "oboygutt",
          "updatedAt": "2018-04-06T10:00:00.000Z",
          "type": {
            "id": 1,
            "name": "Web Application"
          },
          "status": {
            "id": 1,
            "name": "In Production"
          },
          "branch": {
            "name": "develop",
            "commit": "yt7762b"
          }
        },
        {
          "id": 5,
          "name": "DYNO Messaging (Apollo GraphQL)",
          "description": "Messaging-API written in Node (GraphQL).",
          "url": "https://message.dyno.no/",
          "port": 44009,
          "icon": "envelope",
          "createdAt": "2018-05-08T00:00:00.000Z",
          "createdBy": "oboygutt",
          "updatedAt": "2018-05-08T10:00:00.000Z",
          "type": {
            "id": 2,
            "name": "API"
          },
          "status": {
            "id": 1,
            "name": "In Production"
          },
          "branch": {
            "name": "develop",
            "commit": "b7765u76"
          }
        },
        {
          "id": 6,
          "name": "DYNO Redis cache",
          "description": "Redis cache for DYNO Messages (images and content).",
          "icon": "tachometer",
          "createdAt": "2018-04-03T00:00:00.000Z",
          "createdBy": "oboygutt",
          "updatedAt": "2018-04-06T10:00:00.000Z",
          "type": {
            "id": 4,
            "name": "Cache"
          },
          "status": {
            "id": 1,
            "name": "In Production"
          },
          "branch": {
            "name": "develop",
            "commit": "bb543tn"
          }
        },
        {
          "id": 5,
          "name": "DYNO Authenticator",
          "description": "Authentication written in Node.",
          "url": "https://auth.dyno.no/",
          "port": 8080,
          "icon": "key",
          "createdAt": "2018-05-08T00:00:00.000Z",
          "createdBy": "oboygutt",
          "updatedAt": "2018-05-08T10:00:00.000Z",
          "type": {
            "id": 2,
            "name": "API"
          },
          "status": {
            "id": 1,
            "name": "In Production"
          },
          "branch": {
            "name": "develop",
            "commit": "c889y65"
          }
        },
        {
          "id": 4,
          "name": "DYNO Users",
          "description": "PostgreSQL database containing DYNO users.",
          "icon": "database",
          "createdAt": "2018-05-08T00:00:00.000Z",
          "createdBy": "oboygutt",
          "updatedAt": "2018-05-08T10:00:00.000Z",
          "type": {
            "id": 3,
            "name": "Database"
          },
          "status": {
            "id": 2,
            "name": "In Development"
          },
          "branch": {
            "name": "develop",
            "commit": "d435tt5"
          }
        },
        {
          "id": 5,
          "name": "DYNO PGSQL Cluster",
          "description": "PostgreSQL database (clustered).",
          "icon": "database",
          "createdAt": "2018-05-08T00:00:00.000Z",
          "createdBy": "oboygutt",
          "updatedAt": "2018-05-08T10:00:00.000Z",
          "type": {
            "id": 3,
            "name": "Database"
          },
          "status": {
            "id": 2,
            "name": "In Development"
          },
          "branch": {
            "name": "develop",
            "commit": "d435tt5"
          }
        }
      ]
    },
    "environment": {
      "id": 2,
      "name": "Staging (QA) DYNO",
      "description": "Quality Assurance Environment for DYNO.",
      "ip": "134.2.28.59",
      "createdAt": "2018-05-05T00:00:00.000Z",
      "createdBy": "RausMedSaus",
      "updatedAt": "2018-05-05T10:00:00.000Z",
      "icon": "star-half-o",
      "type": {
        "id": 2,
        "name": "QA"
      }
    },
    "status": {
      "id": 3,
      "name": "In Progress",
      "description": "This deployment is in progress.",
      "key": "IN_PROGRESS",
      "icon": "refresh"
    },
    "createdAt": "2018-05-08T22:15:23.000Z",
    "createdBy": "RausMedSaus"
  }
]
