const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  todo_title: {
    type: String
  },
  todo_description: {
    type: String
  },
  todo_status: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString()
  },
  updatedAt: {
    type: Date,
    default: null
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
