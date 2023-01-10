const { Owner } = require('../models')

module.exports = {
  create: async function (req, res) {
    try {
      const result = await Owner.create(req.body)
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  find: async function (req, res) {
    try {
      const owners = await Owner.find()
      res.json(owners)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  update: async function (req, res) {
    try {
      const result = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  delete: async function (req, res) {
    try {
      const result = await Owner.findByIdAndDelete(req.params.id)
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
}