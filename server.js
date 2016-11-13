var express = require('express');
var morgan  = require('morgan');
var path    = require('path');
var app     = express();
var port    = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
    console.log('Server started on port ' + port);
});
