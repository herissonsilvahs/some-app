const bodyParser = require('body-parser')
const express = require('express')
const server = express();

require('./services/MongoDBService.js')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

require('./routes/billingCycle')(server)

server.listen(3000, function () {
  console.log('Running on http://localhost:3000/');
});
