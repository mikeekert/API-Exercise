var express = require('express');
var app = express();
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

// every file that need env vars needs this line
// make env var global to this file
require('dotenv').config();


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/giphy/:id', function(req, res) {
    console.log('in the github route');
    var i = req.params;
    
    request('https://api.giphy.com/v1/gifs/search?api_key=' + process.env.GIPHY_KEY1 + '&q='+ i +'&limit=1&offset=0&rating=G&lang=en', function(error, response, body) {
        res.status(200).send(JSON.parse(body));
        console.log(body);
    });
});

app.listen(3000, function(req, res) {
    console.log('on 3000');
});