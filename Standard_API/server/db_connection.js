const Pool = require("pg").Pool // we import the pg library to create the database connection a we call it Pool
require('dotenv').config() // we import a dot env file constructor for storing security data

// we create a constant variable called pool that contains the postgres database connection configured with the required data
const pool = new Pool({
    user : process.env.pgUser,
    password : process.env.pgPassword,
    database : process.env.pgDatabase,
    host : process.env.pgHost,
    port : process.env.pgPort
})

//we export the connection so we can use in other modules
module.exports = pool