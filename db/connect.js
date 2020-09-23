const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;

const connectDB = async() => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('connect to database');
  } catch(error) {
    console.log(error);
  }
};

module.exports = connectDB;
