const passportSetup = require('../../config/passport-setup')
const passport = require('passport')
const authController = {}

authController.login = (req,res) => {
	res.render('login')
}

authController.logout = (req,res) => {
	// TODO: handle with Passport
	res.send('Logging out...')
}

authController.googleRedirect = (req,res,) => {
	passport.authenticate('google')
	res.send('You reached the redirect zone')
}

module.exports = authController