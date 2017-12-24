const express = require('express')
const routes = express()

// Controllers
const homePageController = require('./controllers/homePageController')
const authController = require('./controllers/authController')
const profileController = require('./controllers/profileController')

// Passport
const passport = require('passport')

// Routes
routes.get("/", homePageController.getHome)
routes.get("/profile", profileController.authCheck, profileController.getUser)

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
routes.get("/auth/google/redirect", passport.authenticate('google'),(req,res) => {
	//res.send(`Hello ${req.user.username}`)
	res.redirect("/profile")
})	


module.exports = routes