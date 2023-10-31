const express = require("express");
const app = express();
const fs = require("fs");

const users = require("./DATA.json");
const PORT = 3000;

// plusgins middleware
//middleware that only parses urlencoded bodies and only looks at requests
//* where the Content-Type header matches the type option
// ?beacuse were using the data from the URL
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

//* This will block the code here and log() the value
app.use((req, res, next) => {
  console.log("Hello from the middleWare");
  next();
});

app.get("/users", (req, res) => {
  //? Headers provide extra info about data name,ip,type
  // Custom Headers always starts with X
  res.setHeader("X-MtName", " Lakshay");
  res.json(users);
});

//!Setting routes using RESTAPI
// post
app.post("/api/users", (req, res) => {
  const body = req.body;
  //   what is this ?
  //*Passing every thing{destructring} as it is but not ID
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "sucess", id: users.length });
  });
});

// get all the user
app.get("/api/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    return res.json(user);
  }
});

// patch
app.patch("/api/user/:id", (req, res) => {
  return res.json({ status: "pending" });
});

// delete
app.delete("/api/user/:id", (req, res) => {
  return res.json({ status: "pending" });
});

// since get patch and delete have the url so we can merge them also using the app.route()

// This is a promise
mongoose
  .connect("url")
  .then(() => console.log("Connected"))
  .catch((err) => console.log("Error Occured",err));

app.listen(PORT, () => console.log(`server running at ${PORT}`));
