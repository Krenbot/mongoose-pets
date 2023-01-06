const mongoose = require('mongoose')

const OwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

const ColorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

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
  },
  owner: OwnerSchema,
  colors: [ColorsSchema]
})

PetSchema.methods.increaseAge = async function () {
  this.age = this.age + 1
  await this.save()
}

const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet