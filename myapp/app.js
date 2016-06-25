var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var fileName = 'contact.txt';

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (request, response) {
  response.render('hello', {
    title: 'Matthew Brimmer Portfolio'
  });
});
app.get('/about', function (request, response) {
  response.render('about');
});

app.get('/projects', function (request, response) {
response.render('projects');
});

app.get('/contact', function (request, response) {
response.render('contact');
});

app.post('/submit', function (request, response) {
  var data = request.body;
  var goodData = 'Name: ' + data.firstname + ' ' + data.lastname  + '\n' + 'Message: ' + data.message + '\n' + 'Mood: ' + data.mood +'\n';
  console.log(data);
  fs.appendFile(fileName, goodData, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Wrote to: ' + fileName);
  });
  response.render('submit');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
