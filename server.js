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
    // const result = await db.collection('pets').updateOne(
    //   { _id: ObjectId(req.params.id) },
    //   { $set: req.body }
    // )
    // res.json(result)
  } catch(err) {
    res.status(500).json(err)
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    // const result = await db.collection('pets').deleteOne({
    //   _id: ObjectId(req.params.id)
    // })
    // res.json(result)
  } catch(err) {
    res.status(500).json(err)
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
