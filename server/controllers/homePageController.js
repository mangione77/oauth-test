const homePageController = {}

homePageController.getHome = (req,res) => {
	res.status(200).json({
		'message':'OK',
		'status':200
	})
}

module.exports = homePageController