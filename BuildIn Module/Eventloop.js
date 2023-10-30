//! Evnent loop is what allows Node.js to peform
//! non-blocking I/O operations - despite the fact that
//! JAVASCRIPT IS single threaded - by offloading the
//! operations to the system kernel whenever possible

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {  
    res.end("HOLA QUE TAL");
  }
  
  if (req.url == "/about") {
    //  ! BLOCKING CODE  //
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        console.log(`${i}->${j}`);
      }
    }
    res.end("ABOUT PAGE");
  }
});
server.listen(3030, () => {
  console.log("Listening to the port 3030");
});
