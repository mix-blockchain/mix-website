"use strict";

var express = require('express');
var app = express();

app.get(/.svgz/, function(req, res, next) {
res.set({'Content-Encoding': 'gzip'});
next();
});

app.use(express.static('public'));

app.listen(8001, function () {
  console.log('MIX Blockchain Website listening on port 8001');
});
