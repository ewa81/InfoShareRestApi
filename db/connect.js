const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;

const connectDB = async() => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try {
    console.log('connect to database');
  } catch(error) {
    console.log(error);
  }
};

module.exports = connectDB;
