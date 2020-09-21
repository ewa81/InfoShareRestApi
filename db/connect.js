const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;

const connectDB = async() => {
  await mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
  });
  console.log('connect to database');
};

module.exports = connectDB;
