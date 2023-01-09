const router = require('express').Router()
const petRoutes = require('./pets')

router.use('/api/pets', petRoutes)

module.exports = router