const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("HELLO FROM HOME");
});

app.get("/about", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  return res.send("HELLO FROM ABOUT " + name + " " + age);
});

app.listen(7070, () => console.log("Server started on port 7070"));
