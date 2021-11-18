#### Endpoints

### Base URL

- https://buildweekpotlucklambda.herokuapp.com/

Authentication will be implemented using JSON Web Tokens.

### user endpoints

- to register a new account requires the following:

  - [1] username
  - [2] password
  - [3] email

- to sign/login into account requires the following:

  - [1] username
  - [2] password

- [ ] to register a new account use `[POST] method` to the following address
- ` https://buildweekpotlucklambda.herokuapp.com/api/users/register`
  example : on postman => Select Body - chose raw and change where it said text to JSON

```
{
    "username":"herokutest",
    "password":"1234"
}
```

### a successful response will look like this ,depending on entering email since email is not required

```
{
    "username": "herokutest"
}
```

- [ ] to sign in to the created account use `[POST] method` to the following address
- ` https://buildweekpotlucklambda.herokuapp.com/api/users/login`

### a successful response will send back a token and response will look like the following:

```
  {
    "message": "welcome herokutest ",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Imhlcm9rdXRlc3QiLCJwYXNzd29yZCI6IiQyYSQwOCRFLjMwLzdUSjY3RmZUZmFhNTNUL2kudmJ0ZktsVnlESDhIY01ua2ZGMlRWeURES0wxeDRFSyIsImlhdCI6MTYzNzExNTUxNCwiZXhwIjoxNjM3MjAxOTE0fQ.2V8KVc5o6yTc-0cVkNRGwebdg4Nk6ejxbIUPGWMUQxg"
}
```

- [ ] `[POST] /api/potlucks/`
      the token needs to be sent to the sever fo this to work
      Inside Headers add Key: Authorization and Value: "should be the token"

  - Returns the newly created project as the body of the response.

```
postman example ==>
https://buildweekpotlucklambda.herokuapp.com/api/potlucks

{
    "potluck_name": "Thanksgiving",
    "date": "2021-11-20T07:00:00.000Z",
     "time": "13:00:00",
    "location": "U.S.A",
    "guests": ["guest 1", "guest 2"],
    "foods": ["food 1", "foood 2"]

}

```

```
 response would be
{
    "potluck_name": "Thanksgiving",
    "date": "2021-11-20T00:00:00.000Z",
    "time": "13:00:00",
    "location": "U.S.A",
    "potluck_id": 1,
    "user_id": 1
}
```

`[DELETE] /api/potlucks /:potluck_id`

- Will delete a potluck with given id and will return
- the deleted potluck as the response

```
example on post man    ===> hhttps://buildweekpotlucklambda.herokuapp.com/api/potlucks/4

- the request does not have a body
- the request has at Headers a key Authorization and value should be the token
```

```
response
{
    "potluck_id": 4,
    "potluck_name": "Xmas eve",
    "date": "2021-12-24T00:00:00.000Z",
    "time": "13:00:00",
    "location": "U.S.A",
    "user_id": 4
}

```

## Scripts

- **start**: Runs the app in production.
- **server**: Runs the app in development.
- **migrate**: Migrates the local development database to the latest.
- **rollback**: Rolls back migrations in the local development database.
- **seed**: Truncates all tables in the local development database, feel free to add more seed files.
- **test**: Runs tests.
- **deploy**: Deploys the main branch to Heroku.
- **migrateh**: Migrates the Heroku database to the latest.
- **rollbackh**: Rolls back migrations in the Heroku database.
- **databaseh**: Interact with the Heroku database from the command line using psql.
- **seedh**: Runs all seeds in the Heroku database.

## Hot Tips

- Figure out the connection to the database and deployment before writing any code.

- If you need to make changes to a migration file that has already been released to Heroku, follow this sequence:

  1. Roll back migrations in the Heroku database
  2. Deploy the latest code to Heroku
  3. Migrate the Heroku database to the latest

- If your frontend devs are clear on the shape of the data they need, you can quickly build provisional endpoints that return mock data. They shouldn't have to wait for you to build the entire backend.

- Keep your endpoints super lean: the bulk of the code belongs inside models and other middlewares.

- Validating and sanitizing client data using a library is much less work than doing it manually.

- Revealing crash messages to clients is a security risk, but during development it's helpful if your frontend devs are able to tell you what crashed.

- PostgreSQL comes with [fantastic built-in functions](https://hashrocket.com/blog/posts/faster-json-generation-with-postgresql) for hammering rows into whatever JSON shape.

- If you want to edit a migration that has already been released but don't want to lose all the data, make a new migration instead. This is a more realistic flow for production apps: prod databases are never migrated down. We can migrate Heroku down freely only because there's no valuable data from customers in it. In this sense, Heroku is acting more like a staging environment than production.

- If your fronted devs are interested in running the API locally, help them set up PostgreSQL & pgAdmin in their machines, and teach them how to run migrations in their local. This empowers them to (1) help you troubleshoot bugs, (2) obtain the latest code by simply doing `git pull` and (3) work with their own data, without it being wiped every time you roll back the Heroku db. Collaboration is more fun and direct, and you don't need to deploy as often.

---

npm run databaseh
which psql
export PATH="/Library/PostgreSQL/14/bin/:$PATH"

export PATH="/Applications/Postgres.app/Contents/Versions/latest/bin:$PATH"

restart dynos if necessery
