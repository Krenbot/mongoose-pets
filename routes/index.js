const router = require('express').Router()
const colorsRoutes = require('./colors')
const petRoutes = require('./pets')
const ownerRoutes = require('./owners')

router.use('/api/colors', colorsRoutes)
router.use('/api/pets', petRoutes)
router.use('/api/owners', ownerRoutes)

module.exports = router