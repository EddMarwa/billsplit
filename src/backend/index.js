require('dotenv').config();
const express = require('express');
const Web3 = require('web3');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('src/frontend'));

// Connect to Polygon
const web3 = new Web3(process.env.MATIC_RPC_URL);

// Basic route
app.get('/', (req, res) => {
    res.send('Bill Splitting System Backend');
});

// Example endpoint to get the latest block number
app.get('/blockNumber', async (req, res) => {
    try {
        const blockNumber = await web3.eth.getBlockNumber();
        res.json({ blockNumber });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
