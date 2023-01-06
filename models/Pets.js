const { Schema, model } = require('mongoose')

const OwnerSchema = new Schema({
  name: {
    type: String,
    required: "Owner needs a name"
  },
  location: String
})

const ColorSchema = new Schema({
  name: {
    type: String,
    required: "Color needs a name"
  }
})

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
  owner: OwnerSchema,
  colors: [ColorSchema]
})

PetSchema.methods.increaseAge = async function() {
  this.age = this.age + 1
  await this.save()
}

const Pet = model('Pet', PetSchema)

module.exports = Pet