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
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner'
  },
  colors: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Color'
    }
  ],
})

PetSchema.methods.increaseAge = async function () {
  this.age = this.age + 1
  await this.save()
}

const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet