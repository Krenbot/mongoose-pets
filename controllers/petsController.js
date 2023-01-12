const { Pet } = require('../models')

module.exports = {
  create: async function (req, res) {
    try {
      const result = await Pet.create(req.body)
      res.json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  find: async function (req, res) {
    try {
      const pets = await Pet
        .find()
        .populate('owner')
        .populate('colors')
      res.json(pets)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  update: async function (req, res) {
    try {
      const result = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  delete: async function (req, res) {
    try {
      const result = await Pet.findByIdAndDelete(req.params.id)
      res.json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  increaseAge: async function (req, res) {
    const pet = await Pet.findById(req.params.id)
    pet.increaseAge()
    res.json(pet)
  },
  getAgeInfo: async function (req, res) {
    try {
      const results = await Pet.aggregate([
        {
          $group: {
            _id: "AgesInfo",
            max: { $max: '$age' },
            min: { $min: '$age' },
            sum: { $sum: '$age' },
            avg: { $avg: '$age' }
          }
        }
      ])
      res.json(results)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  addColor: async function (req, res) {
    const petId = req.params.id
    const newColor = req.body.color

    const updatedPet = await Pet.findByIdAndUpdate(
      petId,
      { $addToSet: { colors: [newColor] } },
      { new: true }
    )
    res.json(updatedPet)
  },
  removeColor: async function (req, res) {
    const petId = req.params.id
    const colorToRemove = req.body.color

    const updatedPet = await Pet.findByIdAndUpdate(
      petId,
      { $pull: { colors: [colorToRemove] } },
      { new: true }
    )
    res.json(updatedPet)
  }
}