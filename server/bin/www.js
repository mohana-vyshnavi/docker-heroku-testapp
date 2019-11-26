//Lets require/import the http module
//var config = require('./Config');

var express = require('express');
var body_parser = require('body-parser');
var app = express();
var path = require('path');
var https = require('https');
var bodyParser = require('body-parser');
var async = require('async');

__dirname='../../dist';
//var PORT = serverUrl.PORT;
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Angular2 is in the dist folder
app.use(express.static(path.join(__dirname, '.')));

// Set public path
var __projectRoot = '../../dist';
app.use(express.static(__projectRoot));


var server= app.listen(8448,function(){
    var host=server.address().address;
    var port= server.address().port;
    console.log("Test server listening at http://%s:%s",host,port);
    })

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    // do some work here with the database.

 
app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'content-type');
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        res.header("Pragma", "no-cache");
        res.header("Expires",0);

       // res.header('Access-Control-Allow-Headers', 'Authorization');
        if(req.method=="OPTIONS"){
                res.send("OPTIONS SUCCESS");
        }else{
                next();
        }
 });




// Route all unknown paths back to the index page
app.all('*', (req, res) => {
    res.header('Referrer-Policy', 'origin');
    res.status(200).sendFile(path.resolve(__dirname, './index.html'));
  });



