const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static("src/frontend"));

// Basic route
app.get("/", (req, res) => {
  res.send("Bill Splitting System Backend");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

require("dotenv").config();
const Web3 = require("web3");

const web3 = new Web3(process.env.MATIC_RPC_URL);

// Example function to get the latest block number
web3.eth.getBlockNumber().then(console.log).catch(console.error);
