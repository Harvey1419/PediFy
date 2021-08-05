const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:RnbuszA9JPclsj6L@cluster0.dbnro.mongodb.net/minticProject?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "fail connection"));
db.once("open", () => {
  console.log("conectado a la db");
});
