const router = require('express').Router()
const petsController = require('../controllers/petsController')

router.post('/', petsController.create);

router.get('/', petsController.find);

router.put('/update/:id', petsController.update);

router.put('/addColor:id', petsController.addColor)

router.put('/removeColor:id', petsController.removeColor)

router.delete('/delete/:id', petsController.delete);

router.put('/increase-age/:id', petsController.increaseAge)

router.get('/aggregate-ages', petsController.getAgeInfo)

module.exports = router