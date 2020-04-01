const routes = require('express').Router()

const PasswordController = require('./controllers/PasswordController')

routes.get('/validate/:password', PasswordController.validate)

module.exports = routes
