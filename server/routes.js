const express = require('express')
const routes = express()

// Controllers
const homePageController = require('./controllers/homePageController')
const authController = require('./controllers/authController')

// Passport
const passport = require('passport')

// Routes
routes.get("/", homePageController.getHome)

// Auth routes
	// - Login
routes.get("/auth/login", authController.login)
	// - Logout
routes.get("/auth/logout", authController.logout)	
	// - Auth with Google
routes.get("/auth/google", passport.authenticate('google', {
	scope:['profile']
}))
	// - Redirect once is connected to Google
routes.get("/auth/google/redirect", authController.googleRedirect)	


module.exports = routes