const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
  // TODO: colors
})


const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet