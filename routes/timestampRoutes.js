const express = require('express')
const router = express.Router()
const {fromDateStringOrUnix} = require('../controllers/timestampController')

router.get('/:date', fromDateStringOrUnix)


module.exports = router
