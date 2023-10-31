//!middleware can be consider as the passage gate btw the req and res :
//!based on mw checks if allowws req to pass forward or return from mware

// plusgins middleware
app.use(express.urlencoded({ extended: false }));

//* This will block the code here and log() the value
app.use((req, res, next) => {
  console.log("Hello from the middleWare");

  //This username will be accesable thorughout the middlewares
  //and the and the route object
  req.myUsername = "Khattar lakshay";
  next();
});
