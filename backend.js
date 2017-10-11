"use strict";

var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(8001, function () {
  console.log('LINK Blockchain Website listening on port 8001');
})
