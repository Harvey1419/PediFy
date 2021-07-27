const express = require("express");

app = express();

const port = 3000;

app.use(express.json());

require("./conectDB/database");

app.use("/", require("./routes/route"));

app.use("/admin", require("./infraestructure/entry-points/admin.controller"));

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
  