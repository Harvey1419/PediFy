const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/projectMintic", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "fail connection"));
db.once("open", () => {
  console.log("conectado a la db");
});
