const router = require('express').Router()
const ownersController = require('../controllers/ownersController')

router.post('/', ownersController.create);

router.get('/', ownersController.find);

router.put('/update/:id', ownersController.update);

router.delete('/delete/:id', ownersController.delete);

module.exports = router