const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/route");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", router);
app.listen(4000);
console.log("Listening");
