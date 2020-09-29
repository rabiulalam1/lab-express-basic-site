const { response } = require("express");

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (require, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});
app.get("/about", (require, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});
app.get("/contact", (require, response, next) => {
  response.sendFile(__dirname + "/views/contact.html");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
