const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");

const user = require("./routes/users");

InitiateMongoServer();

const app = express();

const PORT = 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server started at PORT ${PORT}`);
});
