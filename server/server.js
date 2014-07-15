var express = require("express");
var app = express();

app.use(express.static(".."));

app.listen(7000);

console.log("Server start on port 7000");