module.exports = function(app) {
	var HomeController = {
		index: function(req, res){
			console.log('GGGGGGG');
			res.render('home/index');
		}
	};
	return HomeController;
};