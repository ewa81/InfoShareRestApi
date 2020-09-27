require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const connect = require('./db/connect');
const connectDB = require('./db/connect');

app.use(express.json());

connectDB();
app.use(express.json());
const todoRouter = require('./routes/todo');
app.use('/api', todoRouter);

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.put("/api/todos/:id", (req, res) => {
  const findId = req.params.id;

  const todoIndex = todos.findIndex(todo => todo.id == findId);

  todos[todoIndex] = req.body;
  res.json(todos[todoIndex]);
});

app.delete("/api/todos/:id", (req, res) => {
  const findId = req.params.id;

  const todoIndex = todos.findIndex(todo => todo.id == findId);

  todos.splice(todoIndex, 1);

  res.json({
    message: `Successfully removed task with id: ${findId}.`
  });
});

app.listen(PORT, () => console.log(`App is running on localhost: ${PORT}`));
