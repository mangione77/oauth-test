const authController = {}

authController.login = (req,res) => {
	res.render('login')
}

authController.logout = (req,res) => {
	// TODO: handle with Passport
	res.send('Logging out...')
}

authController.googleAuth = (req,res) => {
	// TODO: handle with Passport
	res.send("Logging in with Google...")
}

module.exports = authController