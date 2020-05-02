const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

const organizations = {};
let currId = 0;


app.get('/api', (req, res) => res.send('Hello United Nepali!'));

app.get('/api/health-check', (req, res) => res.send('OK'));

app.post('/api/organizations', (req, res) => {
  const idVal = currId;
  currId += 1;

  organizations[idVal] = { Name: req.body.name };
  res.sendStatus(200);
});


// * [GET] [organizations/:id] Gets organization by ID
// * [POST] [organizations/:id] Creates new organization by ID
// * [PUT] [organizations/:id] Updates new organization by ID
// * [DELETE] [organizations/:id] Delete organization by ID
