const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

const port = 8080;
app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});

app.post('/analyze', async (req, res) => {
    const text = req.body.text;
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${text}`);
    const data = await response.json();
    res.send(data);
});
