const passportSetup = require('../../config/passport-setup')
const passport = require('passport')
const authController = {}

authController.login = (req,res) => {
	res.render('login', { user: req.user })
}

authController.logout = (req,res) => {
	// TODO: handle with Passport
	req.logout()
	res.redirect("/")
}

authController.googleRedirect = (req,res,) => {
	res.send('You reached the redirect zone')
}

module.exports = authController