const homePageController = {}

homePageController.getHome = (req,res) => {
	res.render('home')
}

module.exports = homePageController