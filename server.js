const express = require('express');
const connection = require('./config/connection')
const { Pet } = require('./models')

console.log(Pet)

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
    console.log(err)
    res.status(500).json(err)
  }
});

// app.get('/latest', async (req, res) => {
//   try {
    // const pets = await db.collection('pets')
    //   .find()
    //   .limit(3)
    //   .skip(3)
    //   .sort({ name: -1 })
    //   .sort({ age: -1 })
    //   .toArray()

    // res.json(pets)
//   } catch(err) {
//     res.status(500).json(err)
//   }
// });

app.put('/update/:id', async (req, res) => {
  try {
    const result = await Pet.findByIdAndUpdate(req.params.id, { 
      $set: req.body 
    }, { new: true })
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});







