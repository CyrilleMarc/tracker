const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//-----------------------------------------------
// connection mongodb

mongoose.set('strictQuery', true);
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongodb is connected successfully');
})

//---------------------------------------------
//routage
const exercicesRouter = require('./routes/exercices');
const usersRouter = require('./routes/users');

app.use('/exercices', exercicesRouter);
app.use('/users', usersRouter);
//---------------------------------------

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
})