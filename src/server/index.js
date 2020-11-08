// express
var path = require('path')
const express = require('express')
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('dist'))

// dotenv
const dotenv = require('dotenv');
dotenv.config();

// API
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;
const langAndText = "&lang=en&txt="
const model = "&model=general"

console.log(`API Key: ${API_KEY}`);

// METHOD
app.get("/", (req, res) => {
    res.sendFile("index.html",{ root: __dirname });
});

app.post("/post", async (req, res) => {
    let text=req.query.txt;
    const response = await fetch(`${baseUrl}${API_KEY}${langAndText}${text}${model}`);
    console.log(response);
    try {
        const data = await response.json();
        res.send(data);
    } catch (err){
        console.log("error: ", err);
    }
});

// port
const port = 8081;
const server = app.listen(port, () => {
    console.log(`you are runining with ${port} port.`)
});