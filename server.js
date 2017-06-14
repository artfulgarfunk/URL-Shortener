const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());


app.listen(3000, function() {
  console.log('URL Shortener started on port 3000');
})

app.get('/ ', (req,res) => {
  console.log(req.url);
})
