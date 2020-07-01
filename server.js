const express = require("express");
const path = require("path");
const app = express();
const http = require("http");

const port = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(port);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
