const express = require('express')
const dataController = require('../Controller/dataController')
const router = new express.Router()


router.post('/data',dataController.getdata)

module.exports = router