// const connectToMongo = require('./db');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Anmol!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})