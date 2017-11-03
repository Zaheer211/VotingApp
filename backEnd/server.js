const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const requestIp = require('request-ip');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb://XXXXXXX');

let port = process.env.PORT || 8080;

// let port = 3000;

// mongoose.connect('mongodb://127.0.0.1:27017/polls_db');

mongoose.connection.on('error', (error) => {
  console.log('Error occured while connecting to MongoDB');
  console.log(error);
});

mongoose.connection.once('open', () => {
  console.log('Successfully connected to MongoDB');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(requestIp.mw());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport.js')(passport);

const poll = require('./routes/poll')
app.use('/poll', poll);

app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(port, () => {
  console.log("Server running at port" + port);
});
