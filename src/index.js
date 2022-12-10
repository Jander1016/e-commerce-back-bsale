const express = require('express');
const apicache = require('apicache')
const cors = require("cors");

const v1RouterProduct = require('./v1/routes/productRoutes')
const v1RouterCategory = require('./v1/routes/categoryRoutes')

server.use(cors())
const server = express();
const cache =apicache.middleware

server.use(express.json());
server.use(cache('5 minutes'));

server.use('/api/v1', v1RouterProduct)
server.use('/api/v1', v1RouterCategory)

module.exports = server

