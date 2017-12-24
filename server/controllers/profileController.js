const profileController = {}

profileController.authCheck = (req,res,next) => {
	if (!req.user) {
		res.redirect("/auth/login")
	}
	else {
		next()
	}
}

profileController.getUser = (req,res) => {
	res.render('profile', {user: req.user})
}

module.exports = profileController