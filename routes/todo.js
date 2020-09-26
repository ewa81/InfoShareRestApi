const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.model');
const todos = require('../mocks/todos.json');

router.post('/todos', async(req, res) => {
  const newTodo = new Todo(req.body);

  try {
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.log(error);
  }
});

router.post('/all', async(req, res) => {
  const todo = await Todo.insertMany(todos);
  console.log(await Todo.find());
});

module.exports = router;
