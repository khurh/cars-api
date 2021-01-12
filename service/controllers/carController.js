const carsList = require('../data/cars');

class CarController {
  // Get all cars
  static getAllCars(req, res) {
    return res.status(200).send(carsList);
  }

  // Get a single car
  static getSingleCar(req, res) {
    const car = carsList.find((car) => car.id === req.params.id);

    if (car) {
      return res.status(200).send(car);
    }

    return res.status(404).send({
      message: 'Car not found',
    });
  }
}

module.exports = CarController;
