## Cars service

- To start the car service server, navigate to the service directory and run `npm install` to install the libraries
- Then run `npm run start`, runs on port 3000
- For unit testing, run `npm run unit-tests`
- For integration testing, run `npm run integration-tests`

## Cars API

- Used express-generator as a template, created a cars router
- Consumes and makes a request to get data from the cars service
- To start the car api server, navigate to the api directory and run `npm install` to install the libraries
- Then run `npm run start`, runs on port 3001
- GET - localhost:3001/cars lists all the car data
- GET - localhost:3001/cars/JHk290Xj will show the car object with the id, "JHk290Xj"

## Testing for each service (service and api directories),

- For api, the service server needs to be running
- For unit testing, run `npm run unit-tests`
- For integration testing, run `npm run integration-tests`
