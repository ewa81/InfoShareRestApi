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
  todos_createdAt: {
    type: Date,
    default: Date.now
  },
  todos_updatedAt: {
    type: Date,
    default: null
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
