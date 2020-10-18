require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const connect = require('./db/connect');
const connectDB = require('./db/connect');
const cors = require('cors');

app.use(cors());

app.use(express.json());

connectDB();
app.use(express.json());
const todoRouter = require('./routes/todo');
app.use('/api', todoRouter);

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`App is running on localhost: ${PORT}`));
