const BillingCycle = require("../models/BillingCycle");
const express = require('express')
const router = express.Router()

BillingCycle.methods(["get", "post", "put", "delete", "patch"])

module.exports = function (server) {
  server.use('/api', router)

  BillingCycle.register(router, '/billingCycles')

}
