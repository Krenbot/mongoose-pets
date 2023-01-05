const express = require('express');
const { MongoClient, ObjectId } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')
const dbName = 'shelterDB'
let db

const app = express();
const port = 3001;

app.use(express.json());

app.post('/create', async (req, res) => {
  try {
    const result = await db.collection('pets').insertOne(req.body)
    res.json(result)
  } catch(err) {
    res.status(500).json(err)
  }
});

app.get('/read', async (req, res) => {
  try {
    const pets = await db.collection('pets').find().toArray()
    res.json(pets)
  } catch(err) {
    res.status(500).json(err)
  }
});

app.get('/latest', async (req, res) => {
  try {
    const pets = await db.collection('pets')
      .find()
      .limit(3)
      .skip(3)
      .sort({ name: -1 })
      .sort({ age: -1 })
      .toArray()

    res.json(pets)
  } catch(err) {
    res.status(500).json(err)
  }
});

app.put('/update/:id', async (req, res) => {
  try {
    const result = await db.collection('pets').updateOne(
      { _id: ObjectId(req.params.id) },
      { $set: req.body }
    )
    res.json(result)
  } catch(err) {
    res.status(500).json(err)
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    const result = await db.collection('pets').deleteOne({
      _id: ObjectId(req.params.id)
    })
    res.json(result)
  } catch(err) {
    res.status(500).json(err)
  }
});

const init = async () => {
  await client.connect()
  db = client.db(dbName)

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

init()





