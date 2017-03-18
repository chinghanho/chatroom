const express = require('express')
const path = require('path')
const router = express.Router()
const controllers = require('../app/server/controllers')

router.get(/^\/api/, controllers.api.index)

router.get('*', controllers.pages.index)

module.exports = router
