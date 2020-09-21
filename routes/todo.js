const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../models/todo.model');

router.post('/', async(req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
});

module.exports = router;
