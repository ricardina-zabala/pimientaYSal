const express = require('express')
const router = express.Router()

const controller = require('../controllers')

router.get('/',controller.index)
router.get('/menu/:id',controller.detalleMenu)

module.exports = router
