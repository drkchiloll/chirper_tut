var express = require('express'),
    login = require('./login');

var app = express();
app
  .set('view engine', 'ejs')
  .use(express.static('./public'))
  .use(login.routes)
  .get('*', function(req, res) {
    res.render('index');
  })
  .listen(3000, function() {
    console.log('Server listening on port 3000');
  })
