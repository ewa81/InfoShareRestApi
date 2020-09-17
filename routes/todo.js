const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../models/todo.model');

router.post('/', async(req, res) => {
  const newTodo = new Todo({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    createdAt: req.body.createdAt
  });
  newTodo.save();
});

module.exports = router;
