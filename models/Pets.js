const { Schema, model } = require('mongoose')

const PetSchema = new Schema({
  name: String,
  age: Number,
  type: String,
  // TODO: owner
  // TODO: colors
})

const Pet = model('Pet', PetSchema)

module.exports = Pet