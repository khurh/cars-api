var express = require('express');
var router = express.Router();
const axios = require('axios');

// Makes a call to the cars service returning the response data
router.get('/', (req, res) => {
  try {
    axios
      .get('http://localhost:3000/cars')
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => res.send(err));
  } catch (error) {
    console.log('Error: ', error);
  }
});

// Makes a call to the cars service returning the response data
router.get('/:id', (req, res) => {
  try {
    axios
      .get(`http://localhost:3000/cars/${req.params.id}`)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(404).send({
          message: 'Car not found',
        });
      });
  } catch (error) {
    console.log('Error: ', error);
  }
});

module.exports = router;
