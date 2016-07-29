var express = require('express');
var morgan  = require('morgan');
var path    = require('path');


var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
    console.log('Server started on port 3000');
});