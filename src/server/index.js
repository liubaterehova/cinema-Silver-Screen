const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3010;

app.get('/api/v1/films', (req, response) => {
  MongoClient.connect('mongodb://localhost:27017/', (_, db) => {
    const dbo = db.db('lab-project');

    dbo.collection('films').find({}).toArray((err, result) => {
      if (err) throw err;
      response.send(result);
      db.close();
    });
  });
});
app.get('/api/v1/cinemas', (req, response) => {
  MongoClient.connect('mongodb://localhost:27017/', (_, db) => {
    const dbo = db.db('lab-project');

    dbo.collection('cinemas').find({}).toArray((err, result) => {
      if (err) throw err;
      response.send(result);
      db.close();
    });
  });
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/assets', express.static(`${__dirname}`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is listening on ${port} port`));
