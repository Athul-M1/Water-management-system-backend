const express = require('express')
const dataController = require('../Controller/dataController')
const router = new express.Router()


router.post('/getdatas',dataController.getdata)

module.exports = router