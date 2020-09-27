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

router.post('/todos/all', async(req, res) => {
  await Todo.insertMany(todos);
  res.json({ message: "Successfully added all todos" });
});

module.exports = router;
