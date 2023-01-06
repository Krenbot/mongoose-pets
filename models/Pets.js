const { Schema, model } = require('mongoose')

const PetSchema = new Schema({
  name: {
    type: String,
    required: "A name is required",
  },
  age: {
    type: Number,
    required: "An age is required",
    default: 0,
  },
  type: {
    type: String,
    required: "A animal type is required"
  },
  // TODO: owner
  // TODO: colors
})

const Pet = model('Pet', PetSchema)

module.exports = Pet