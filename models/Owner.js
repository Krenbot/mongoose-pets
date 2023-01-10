const mongoose = require('mongoose')

const OwnerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
}, {
  toJSON: {
    virtuals: true,
  }
})

OwnerSchema.virtual('fullName')
  .get(function() {
    return `${this.firstName} ${this.lastName}`
  })
  .set(function(value) {
    const [firstName, lastName] = value.split(' ')
    this.set({ firstName, lastName })
  })

const Owner = mongoose.model('Owner', OwnerSchema)

module.exports = Owner