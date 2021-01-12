const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const carsListMock = require('./carsListMock.json');

const app = require('../app');
const should = chai.should();
const expect = chai.expect;

describe('test /cars api calls', () => {
  it('should return the list of all cars', (done) => {
    chai
      .request(app)
      .get('/cars')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal(carsListMock.cars);
        done();
      });
  });

  it('should return a car object by id', (done) => {
    chai
      .request(app)
      .get('/cars/JHk290Xj')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal(carsListMock.cars[0]);
        done();
      });
  });

  it('should return car not found message', (done) => {
    chai
      .request(app)
      .get('/cars/123')
      .end((err, res) => {
        res.should.have.status(404);
        expect(res.body).to.deep.equal({ message: 'Car not found' });
        done();
      });
  });
});
