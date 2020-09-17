const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: Boolean
  },
  createdAt: {
    type: Date
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
