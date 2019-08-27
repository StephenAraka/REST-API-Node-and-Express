/* eslint-disable no-console */
const express = require('express');

const app = express();
const bookRouter = express.Router();
const PORT = process.env.PORT || 3000;

const books = [
  {
    title: 'Varjak Paw',
    author: 'S.F. Said'
  },
  {
    title: 'Goosebumps series',
    author: 'R.L Stine'
  }
];

bookRouter.route('/books')
  .get((req, res) => {
    const response = books;

    res.json(response);
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
