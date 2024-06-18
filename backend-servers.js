const http = require("http");
const serverConfigs = require("./config.json").servers;

const createServer = (host, port) => {
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Server response from port: ${port}\n`);
  });

  server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}.`);
  });
};

serverConfigs.forEach((server) => createServer(server.host, server.port));
