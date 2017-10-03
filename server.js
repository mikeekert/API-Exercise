var express = require('express');
var app = express();

// every file that need env vars needs this line
// make env var global to this file
require('dotenv').config();

var request = require('request');

app.get('/github', function(req, res) {
    console.log('in the github route');


    request('https://api.giphy.com/v1/gifs/search?api_key=' + process.env.GIPHY_KEY + '&q=Kittens&limit=25&offset=0&rating=G&lang=en',
    function(error, response, body) {
        res.status(200).send(JSON.parse(body));
    });
    
});

app.listen(3000, function(req, res) {
    console.log('on 3000');
});