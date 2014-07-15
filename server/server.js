var express = require("express");
var app = express();

//tell Express where to find statis files relative to server.js
app.use(express.static(".."));

app.listen(7000);

console.log("Server start on port 7000");