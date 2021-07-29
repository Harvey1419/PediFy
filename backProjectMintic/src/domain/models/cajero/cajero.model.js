const { Schema, model } = require("mongoose");

const cajeroSchema = new Schema({ 
  email: String,
  password: String,
});

module.exports = model('Cajero', cajeroSchema);