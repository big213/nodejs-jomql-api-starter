# nodejs-jomql-api-starter

Template for bootstrapping production ready web application projects for serverless infrastructure. Uses the [jomql](https://github.com/big213/jomql) API for a GraphQL-like experience, except implemented in JSON for simpler consumption. The directory structure of this particular starter project was designed for use with [Firebase Cloud Functions](https://firebase.google.com/docs/functions) with Node 12 runtime.

## Getting Started

Set up your Firebase project. Make sure to enable Functions. You will also have to be on the Blaze plan in order to use Cloud Functions. Enter "No" for all of the options.

```bash
firebase init
```

Set up the environment in `env.json`. Example env file in `env.json.example`. Only works with MySQL at the moment. Exclude `mysql.socketpath` from your `env.json` file if not connecting via socket.

Install dependencies

```bash
cd functions && npm install
```

Sync the database

```bash
cd functions && npm run db:sync
```

Emulate the function

```bash
npm run serve
```

## Basic Usage

**Register User**

`POST http://localhost:5001/project-name/us-central1/api/jomql`

```json
{
  "action": "registerUser",
  "query": {
    "token": true,
    "user": {
      "id": true,
      "name": true
    },
    "__args": {
      "email": "foo@example.com",
      "password": "bar",
      "name": "John Doe"
    }
  }
}
```

**Login User**

`POST http://localhost:5001/project-name/us-central1/api/jomql`

```json
{
  "action": "loginUser",
  "query": {
    "token": true,
    "user": {
      "*": true
    },
    "__args": {
      "email": "foo@example.com",
      "password": "bar"
    }
  }
}
```
