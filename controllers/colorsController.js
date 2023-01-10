const { Color } = require('../models')

module.exports = {
  create: async function (req, res) {
    try {
      const result = await Color.create(req.body)
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  find: async function (req, res) {
    try {
      const pets = await Color.find()
      res.json(pets)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  update: async function (req, res) {
    try {
      const result = await Color.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  delete: async function (req, res) {
    try {
      const result = await Color.findByIdAndDelete(req.params.id)
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
}