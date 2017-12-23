const express = require('express')
const routes = express()

// Controllers
const homePageController = require('./controllers/homePageController')

// Routes
routes.get("/", homePageController.getHome)


module.exports = routes