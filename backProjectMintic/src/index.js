const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  'content-type': 'application/json',
  'Acces-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Headers':
  'Access-Control-Allow-Origin, authorization, X-API-KEY, x-Rquested-With, content-type'
}

const port = 3000;

app.use(express.json());

app.use(cors(corsOptions))

require("./conectDB/database");

app.use("/", require("./routes/route"));

app.use("/admin", require("./infraestructure/entry-points/admin.controller"));

app.use("/cajero", require("./infraestructure/entry-points/cajero.controller"))

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
