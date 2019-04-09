// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = '4200';
const mongo = require('mongodb');
const session = require('express-session');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.set('views', __dirname + '/views/');
app.use("/public", express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views/'));
app.use(express.static(__dirname + '/node_modules/'));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const home = require('./routes/home.js');
app.use('/', home);

app.get('*', (req, res) => { res.send({ err: '404' }); });

app.listen(port, () => {
  console.log('listening on port: ' + port);
});
