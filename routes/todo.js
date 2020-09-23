const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.model');

router.post('/todos', async(req, res) => {
  const newTodo = new Todo(req.body);
  
  try {
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
