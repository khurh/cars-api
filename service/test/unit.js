const server = require('../server');
const carsListMock = require('./carsListMock.json').cars;

const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', server);

describe('test cars route', () => {
  it('should return the list of all cars', (done) => {
    request(app).get('/cars').expect(carsListMock).expect(200, done);
  });

  it('should return a car object by id', (done) => {
    request(app)
      .get('/cars/JHk290Xj')
      .expect(carsListMock[0])
      .expect(200, done);
  });

  it('should return car not found message if id of car does not exist', (done) => {
    request(app)
      .get('/cars/4343423')
      .expect({
        message: 'Car not found',
      })
      .expect(404, done);
  });
});
