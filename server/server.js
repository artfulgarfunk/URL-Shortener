const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('static'));
app.use(bodyParser());

app.listen(3000, function() {
  console.log('URL Shortener started on port 3000');
})

app.get('/home', (req,res) => {
  console.log('it works');
})

app.post('/handleform', (req,res) => {
  console.log('received post request');
  console.log(req.body.user_name);
})
