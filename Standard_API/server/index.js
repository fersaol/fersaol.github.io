// IMPORTS//
const express = require("express") // we import the package needed for creating the API
const cors = require("cors") // we import the package needed for working with different domains
const jwt = require('jsonwebtoken') // we import a package to create we tokens
const bcrypt = require('bcrypt') // we import a package for encrypting passwords
require("./db_connection") // we import the connection of our database so we have it connected with our api
let port = process.env.PORT || 3000 // we create a variable that captures the server port and if there isn't stablish 3000 by default

const app = express() // we instanciate a API app
//MIDDLEWARE//
app.use(express.json())
app.use(cors())

// Middleware function create for generationg tokens
function generateToken(userId) {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });}

// Middleware function created for verification token found in headers
function authenticate(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
        res.status(401).send('Authorization token not found');
        return;
        }

        const { userId } = jwt.verify(token, process.env.JWT_SECRET);                            
        req.userId = userId;
        next();
    } catch (err) {
        console.error(err.message);
        res.status(401).send('Invalid token');
    }
}

//ROUTES//

// Here we have the GET methods

// Here we have the  POST methods

// Here we have the PUT methods

// Here we have the DELETE methods


app.listen(port,console.log(`server is listening on port ${port}...`))// we initialize the api on the server port