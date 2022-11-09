const express = require('express');
const cors = require("cors");
const apicache = require('apicache')

const v1RouterProduct = require('./v1/routes/productRoutes')
const v1RouterCategory = require('./v1/routes/categoryRoutes')

const server = express();
const cache =apicache.middleware

server.use(express.json());
server.use(cors());
server.use(cache('5 minutes'));

server.use('/api/v1', v1RouterProduct)
server.use('/api/v1', v1RouterCategory)

module.exports = server

