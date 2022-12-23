import { createServer } from "http";
const server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello Wolrd");
});
const port = process.env.port || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
