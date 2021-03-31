const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.model');
const todos = require('../mocks/todos.json');

router.get('/todos', async(req, res) => {
  try {
    const todos = await Todo.find(req.body);
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
});

router.get('/todos/:id', async (req, res) => {
  const todo = await Todo.findOne({_id: req.params.id});
  res.json(todo);
})

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
      res.json({message: "Requested todo doesn't exist in database"});
    } else {
      await Todo.deleteOne(todo);
      res.json({message: 'Todo has been successfully removed'});
    }
  } catch (error) {
    console.log(error);
  }
});

router.put('/todos/:id', async(req, res) => {
  try {
    const todo = await Todo.findOne({ id: req.params.title });
    if (!todo) {
      res.json({message: "Requested todo doesn't exist in database"});
    } else {
      await Todo.updateOne({ _id: req.params.id}, req.body);
      res.json({message: 'Todo has been successfully updated'});
    }
  } catch(error) {
    console.log(error);
  }
});

router.delete('/todos/many/:todosList', async (req, res) => {
  console.log(req.params.todosList);
});

module.exports = router;
