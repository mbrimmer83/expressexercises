var express = require('express');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('hello', {
    title: 'Hello',
    content: 'Hello, world!'
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
