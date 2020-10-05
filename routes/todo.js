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
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
      if (!todo) {
      res.json({message: "Request todo doesn't exist in database"});
    } else {
      await todo.deleteOne();
      res.json({message: 'Todo deleted'});
    }
  } catch (error) {
    console.log(error);
  }
});

router.put('/todos/:id', async(req, res) => {
  try {
    const todo = await Todo.findOne({ id: req.params.title });
      if (!todo) {
      res.json({message: "Request todo doesn't exist in database"});
    } else {
      await todo.updateOne();
      res.json({message: 'Todo update'});
    }
  } catch(error) {
    console.log(error);
  }
});

module.exports = router;
