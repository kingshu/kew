const express = require('express');
const lessMiddleware = require('less-middleware');
const app = express();
const port = 3000;
const rsvp = require('./js/rsvp');

app.set('view engine', 'pug');
app.use(lessMiddleware({
    src: __dirname + '/less',
    dest: __dirname + '/less-css',
    compress: true
}));
app.use(express.static(__dirname + '/less'));

//app.use('/less-css', expressLess(__dirname + '/less'), {cache: true, compress: true});

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/rsvp', function (req, res) {
  rsvp.rsvp(req, function(s) {
  	console.log(s);
  });
  res.render('rsvp', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


//module.exports = app;