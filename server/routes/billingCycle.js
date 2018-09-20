const BillingCycle = require("../models/BillingCycle");
const express = require('express')
const router = express.Router()

BillingCycle.methods(["get", "post", "put", "delete", "patch"]);

module.exports = function (server) {
  server.use('/api', router)

  router.route('/teste').get((request, response, next) => {
    response.send('teste')
  })
}
