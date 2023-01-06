require('./config/connection')
const express = require('express');
const { Pet } = require('./models')

const app = express();
const port = 3001;

app.use(express.json());

app.post('/create', async (req, res) => {
  try {
    const result = await Pet.create(req.body)
    res.json(result)
  } catch(err) {
    res.status(500).json(err)
  }
});

app.get('/read', async (req, res) => {
  try {
    const pets = await Pet.find()
    res.json(pets)
  } catch(err) {
    res.status(500).json(err)
  }
});

app.put('/update/:id', async (req, res) => {
  try {
    const result = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(result)
  } catch(err) {
    res.status(500).json(err)
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    const result = await Pet.findByIdAndDelete(req.params.id)
    res.json(result)
  } catch(err) {
    res.status(500).json(err)
  }
});

app.put('/increase-age/:id', async (req, res) => {
  const pet = await Pet.findById(req.params.id)
  pet.increaseAge()
  res.json(pet)
})

app.get('/aggregate-ages', async (req, res) => {
  try {
    const results = await Pet.aggregate([
      { 
        $group: {
          _id: "AgesInfo",
          max: { $max: '$age' },
          min: { $min: '$age' },
          sum: { $sum: '$age' },
          avg: { $avg: '$age' }
        } 
      }
    ])
    res.json(results)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
