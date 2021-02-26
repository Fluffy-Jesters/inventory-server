'use strict';
// Dependancies
const express = require('express');
const app = express();
const inventory_model = require('./models/inventory_model.js');

app.use(express.json());

app.use(function(request,response,next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
})

require('dotenv').config()

let port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.status(200).send('server is up and running');
    inventory_model.getInventory()
        .then(res => {
            response.status(200).send(res);
        })
        .catch(error => {
            response.status(500).send(error);
        })
});

app.listen(port, () => {
    console.log(`server up on port ${port}`);
})