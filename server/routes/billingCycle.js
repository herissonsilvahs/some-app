const express = require("express");
const router = express.Router();
const _ = require('lodash')

const BillingCycle = require("../models/BillingCycle");
const BillingSummaryService = require("../services/BillingSummaryService")

BillingCycle.methods(["get", "post", "put", "delete", "patch"])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.after('post', errorHandler).after('put', errorHandler)

function errorHandler(request, response, next) {
  const bundle = response.locals.bundle

  if(bundle.errors) {
    const errors = parseErrors(bundle.errors)
    response.status(500).json({errors})
  }else{
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

BillingCycle.route('count', function(request, response, next) {
  BillingCycle.count(function(error, value) {
    if(error) {
      response.status(500).json({errors: [error]})
    }else {
      response.json({value})
    }
  })
})

module.exports = function (server) {
  server.use('/api', router)
  BillingCycle.register(router, '/billingCycles')
  router.route('/billingSummary').get(BillingSummaryService.getSummary)
}
