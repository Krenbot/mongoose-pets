const mongoose = require('mongoose')

const OwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

const Owner = mongoose.model('Owner', OwnerSchema)

module.exports = Owner