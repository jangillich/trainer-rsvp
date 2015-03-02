var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var users = req.db.get('users');
	var doc = users.find({}, function(){
		res.render('index', { title: doc });
	});
});

router.post('/', function(req, res){
	var users = req.db.get('users');
	users.insert({
		username: req.body.username,
		password: req.body.password
	});
	res.render('index', {title: 'Success!'})
});

module.exports = router;
