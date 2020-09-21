const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  todos_title: {
    type: String
  },
  todos_description: {
    type: String
  },
  todos_status: {
    type: Boolean
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
