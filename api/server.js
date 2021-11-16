const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const { checkUserPayload, checkToken } = require("./users/middleware")



const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())
// checkUserPayload,

const userEndpoints = require("./users/router")
const potlucksEndpoints = require("./potlucks/router")
const guestEndpoints = require("./guests/router")
const foodsEndpoints = require('./foods/router');

server.use("/api/users", userEndpoints)
server.use("/api/potlucks", checkToken, potlucksEndpoints)
server.use("/api/guests", guestEndpoints)
server.use("/api/foods", foodsEndpoints)

server.use((err, req, res, next) => {
    const { status, message, stack } = err
    res.status(status || 500).json({
        message,
        stack
    })
})

module.exports = server





// -----------------------------------------
// const express = require('express')
// const helmet = require('helmet')
// const cors = require('cors')
// const db = require('./data/db-config')


// function getAllUsers() { return db('users') }

// async function insertUser(user) {
//   // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
//   // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
//   // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
//   const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
//   return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
// }

// const server = express()
// server.use(express.json())
// server.use(helmet())
// server.use(cors())

// server.get('/api/users', async (req, res) => {
//   res.json(await getAllUsers())
// })


// server.post('/api/users', async (req, res) => {
//   res.status(201).json(await insertUser(req.body))
// })

// module.exports = server


