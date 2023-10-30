const express = require("express");
const app = express();

const user = require("./MOCKDATA.json");
const PORT = 8000;

//!Setting routes

// get all the user
app.get("/api/user", (req, res) => {
  return res.json(user);
});

app.get("/users", (req, res) => {
  const html = `
  <ul>
${user.map((user) => `<li>${user.first_name}</li>`).join()}
  </ul>
`;
  res.send(html);
});

app.listen(PORT, () => console.log(`server running at ${PORT}`));
