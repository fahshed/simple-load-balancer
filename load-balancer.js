const http = require("http");

const roundRobin = require("./roundRobin");

const serverConfig = require("./config.json").servers;

const servers = serverConfig.map((server) => ({
  ...server,
}));

const loadBalancingAlgorithm = "round-robin";

const server = http.createServer((req, res) => {
  if (loadBalancingAlgorithm === "round-robin") {
    roundRobin(servers, req, res);
  }
});

server.listen(3000, () => {
  console.log("Load balancer running on port 3000.");
});
