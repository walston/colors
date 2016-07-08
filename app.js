var express = require('express');
var pug = require('pug');
var app = express();

app.set('view engine', 'pug');
app.use(function(req, res, next) {
  console.log(req.method + ':' + req.url);
  next();
});

app.get('/', function (req, res) {
  res.render('index');
})

app.use(express.static('./public/'));

var port = process.env.PORT || 8080;
app.listen(port, function(req, res) {
  console.log('Listening on: ' + port + '...');
});