## Dependencies
- [Docker](https://www.docker.com/)

## Installation
```shell script
git clone https://github.com/enicioli/itidigital-backend-challenge.git
```
```shell script
cd itidigital-backend-challenge
```
```shell script
sudo docker-compose up -d --build
```
One container will be initialized:
- itidigital-backend-challenge (REST API connected to the host port 3333)

## REST API
```
GET     /validate/:password                (Retrieves validation for a given password)
```

#### Main technologies
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mocha](https://mochajs.org/)