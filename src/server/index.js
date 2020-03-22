import path from 'path';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3010;

app.get('/api/v1/films', async (req, response) => {
  await mongoose.connect('mongodb://localhost:27017/lab-project');

  const { connection } = mongoose;

  connection.collection('films').find({}).toArray((err, result) => {
    if (err) throw err;
    response.send(result);
  });
});

app.get('/api/v1/cinemas', async (req, response) => {
  await mongoose.connect('mongodb://localhost:27017/lab-project');
  const { connection } = mongoose;

  connection.collection('cinemas').find({}).toArray((err, result) => {
    if (err) throw err;
    response.send(result);
  });
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/assets', express.static(`${__dirname}`));

app.get('*', (req, res) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', '0');
  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is listening on ${port} port`));
