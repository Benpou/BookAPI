const express = require('express');

//const db = mongoose.connect('mongodb://localhost/bookAPI');

const Book = require('./models/bookModel');

const app = express();

const port = process.env.PORT || 3000;

const bookRouter = express.Router();

// bookRouter.route('/Books')
//   .get((req, res) => {
//       Book.find((err, books) => {
//         if(err) {
//           res.status(500).send(err);
//         } else {
//           res.json(resJson)
//         }
//       })
//   });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(port);
});
