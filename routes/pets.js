const router = require('express').Router()
const petsController = require('../controllers/petsController')

router.post('/create', petsController.create);

router.get('/', petsController.find);

router.put('/update/:id', petsController.update);

router.delete('/delete/:id', petsController.delete);

router.put('/increase-age/:id', petsController.increaseAge)

router.get('/aggregate-ages', petsController.getAgeInfo)

module.exports = router