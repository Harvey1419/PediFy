const { Schema, model } = require("mongoose");

const adminSchema = new Schema({ 
  email: String,
  password: String,
});

module.exports = model('Admin', adminSchema);