const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.model');
const todos = require('../mocks/todos.json');

router.get('/todos', async(req, res) => {
  await Todo.find();
  res.json(todos);
});

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

router.delete('/todos/:id', async(req, res) =>{
  const removeTodo = await Todo.deleteOne({ id: req.params.id });
  res.json(removeTodo);
});

router.put('/todos/:id', async(req, res) => {
  try {
    const updateTodo = await Todo.updateOne({ id: req.params.id });
    updateTodo.set(req.body);
    res.json(updateTodo);
  } catch(error) {
    res.json({message: error});
  };
});

module.exports = router;
