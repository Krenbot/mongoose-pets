const router = require('express').Router()
const colorsController = require('../controllers/colorsController')

router.post('/', colorsController.create);

router.get('/', colorsController.find);

router.put('/update/:id', colorsController.update);

router.delete('/delete/:id', colorsController.delete);

module.exports = router