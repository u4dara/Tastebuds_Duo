const express = require('express')
const router = express.Router()
const {getOutlets, addOutlet, deleteOutlet} = require('../controllers/outletController')

router.get('/', getOutlets)

router.post('/', addOutlet)

router.delete('/:id', deleteOutlet)


module.exports = router