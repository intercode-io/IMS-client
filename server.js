var express = require('express');
var path = require("path");
var app = express();
var expressStaticGzip = require('express-static-gzip');

app.use(express.static(path.join(__dirname, '/dist/IMS-client'))); // myApp will be the same folder name.
// app.get('/', function (req, res, next) {
//   res.redirect('/');
// });

// app.use("/", path.join(__dirname, '/dist/IMS-client/'));
// app.use('/app', function(req, res) {
//   res.sendFile(path.join(__dirname, '/dist/IMS-client/index.html')); // load the single view file (angular will handle the page changes on the front-end)
// });

app.use('/app', expressStaticGzip(path.join(__dirname, '/dist/IMS-client')));

// app.use('*', function(req, res) { res.redirect('/app')});
app.all('*', function(req, res, next){
  //preflight needs to return exact request-header
  res.set('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);

  if ('OPTIONS' == req.method) return res.sendStatus(204);
  next();
});

app.use('*', function(req, res, next){
  //preflight needs to return exact request-header
  res.sendFile(path.join(__dirname, '/dist/IMS-client/index.html'))
});

app.listen(4222, 'localhost');
console.log('MyProject Server is Listening on port 4222');


// const express = require("express");
// const http = require("http");
// const path = require("path");
//
// const app = express();
//
// const port = process.env.PORT || 4200;
//
// app.use(express.static(__dirname + "/dist/IMS-client"));
//
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname))
// });
//
// app.get("/", (req, res, next) => {
//   res.sendFile("index.html", { root: __dirname + "Client"});
// });
//
//
// const server = http.createServer(app);
//
// server.listen(port, () => console.log('Running....'));

// ==============================================

//
// var express = require('express'),
//   path = require('path'),
//   fs = require('fs');
// var compression = require('compression');
// var app = express();
// var staticRoot = __dirname + "/dist/IMS-client/";
// var env = process.env.NODE_ENV || 'development';
//
// app.set('port', (process.env.PORT || 5000));
//
// app.use(compression());
// /* other middleware */
//
// /* place any backend routes you have here */
//
// app.use(function(req, res, next) {
//   //if the request is not html then move along
//   var accept = req.accepts('html', 'json', 'xml');
//   if (accept !== 'html') {
//     return next();
//   }
//
//   // if the request has a '.' assume that it's for a file, move along
//   var ext = path.extname(req.path);
//   if (ext !== '') {
//     return next();
//   }
//
//   fs.createReadStream(staticRoot + 'index.html').pipe(res);
//
// });
//
// app.use(express.static(staticRoot));
//
//
// app.listen(app.get('port'), function() {
//   console.log('app running on port', app.get('port'));
// });
