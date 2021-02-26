'use strict';
// Dependancies
const express = require('express');
const app = express();

require('dotenv').config()

let port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send('server is up and running');
})

app.listen(port, () => {
    console.log(`server up on port ${port}`);
})