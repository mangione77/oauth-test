const express = require('express')
const routes = express()

// Controllers
const homePageController = require('./controllers/homePageController')
const authController = require('./controllers/authController')

// Routes
routes.get("/", homePageController.getHome)

// Auth routes
	// - Login
routes.get("/auth/login", authController.login)
	// - Logout
routes.get("/auth/logout", authController.logout)	
	// - Auth with Google
routes.get("/auth/google", authController.googleAuth)


module.exports = routes