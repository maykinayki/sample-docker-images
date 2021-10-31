const http = require("http");

const hostname = "0.0.0.0";
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const response = {
    message: process.env.ECHO_MESSAGE,
    NODE_ENV: process.env.NODE_ENV,
    server: {
      hostname,
      port,
    }
  };

  res.end(JSON.stringify(response));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
