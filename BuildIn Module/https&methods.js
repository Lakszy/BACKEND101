const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req == "favicon.ico") res.end();
  const log = `${Date.now()} : ${req.method} ${req.url} NEW RESPONSE\n`;
  // const myUrl  = url.parse(req.url, true);

  fs.appendFile("name.txt", log, (err, data) => {
    if (req.url === "/") {
      res.end(`<h1>WELCOME TO YOUR HOMEPAGE</h1>`);
    }
    if (req.url === "/about") {
      // const username = myUrl.query.myname;
      res.end(`Here is our short history ${username}`);
    }
    if (req.url === "/signup") {
      if (req.method === "GET") {
        res.end("This is a sign up form");
      }
      else if (req.method === "POST"){
        // POST DATA IN DB
        res.end("SUCCESS")
      }
    }

    res.end(
      `<h1>OOPSS</h1>
    <h3> The page you are looking for doesnt exist</h3>
     <a href="/">take me home</a>`
    );
  });
});

// Either direct or we can use callback and console log something
server.listen(8080);
