const http = require('http');

let ready = false;

// Simulate slow startup (15 seconds)
setTimeout(() => {
  ready = true;
  console.log("Application is now ready.");
}, 15000);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    if (!ready) {
      res.statusCode = 503;
      res.end("Starting up...");
    } else {
      res.statusCode = 200;
      res.end("Welcome to Blog Application!");
    }
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
