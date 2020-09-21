const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;

const connectDB = async() => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch(error) {
    console.log(error);
  }
  console.log('connect to database');
};

module.exports = connectDB;
