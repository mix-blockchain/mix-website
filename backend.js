"use strict";

var express = require('express');
var app = express();

app.get(/.svgz/, function(req, res, next) {
res.set({'Content-Encoding': 'gzip'});
next();
});

app.use(express.static('public'));

app.listen(81, function () {
  console.log('MIX Blockchain Website listening on port 81');
});
