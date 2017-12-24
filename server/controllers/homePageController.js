const homePageController = {}

homePageController.getHome = (req,res) => {
	res.render('home', {user: req.user})
}

module.exports = homePageController