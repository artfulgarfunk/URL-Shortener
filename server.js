const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

// const URLs = [
//   { original: 'muse.com',
//     shortened: 'muse'
//   },
//   { original: 'milkychance.com',
//     shortened: 'milkychance'}
// ]

app.listen(3000, function() {
  console.log('URL Shortener started on port 3000');
})

app.get('/ ', (req,res) => {
  // const metadata = { total_count: URLs.length };
  // res.json({ _metadata: metadata, records: URLs });
  console.log(req.url);
})

// app.post('/new', (req, res) => {
//   const new_url = req.body; // setting a new variable equal to whatever is in the body of the request
//   console.log(new_url);
//   new_url.id = URLs.length + 1;
//   new_url.created = new Date();
//   URLs.push(new_url);
//   res.json(URLs);
// })
