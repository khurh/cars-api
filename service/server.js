const express = require('express');
require('dotenv/config');
const cors = require('cors');
const indexRouter = require('./routes/index');
const carsRouter = require('./routes/cars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Routers
app.use('/', indexRouter);
app.use('/cars', carsRouter);

if (!module.parent) {
  app.listen(process.env.PORT, () =>
    console.log(`Cars service server listening on port ${process.env.PORT}`)
  );
}

module.exports = app;
