var express = require('express');
var router = express.Router();
var fs =require('fs');
var a = 0;
var b = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
	a++;
	fs.readFile('public/lxd.txt','utf-8',function(err,data){
		if(err){
			console.log(err)
		}
		else{
			console.log(data)
			fs.writeFile('public/lxd.txt','index页面被访问的次数:'+a,function(err){
				if(err){
					console.log(err)
				}
			})
			res.render('index', { title:data });
		}
	})
  
});
router.get('/lxd', function(req, res, next) {
	b++;
	fs.readFile('public/lxd2.txt','utf-8',function(err,data){
		if(err){
			console.log(err)
		}
		else{
			console.log(data)
			fs.writeFile('public/lxd2.txt','lxd页面被访问的次数:'+b,function(err){
				if(err){
					console.log(err)
				}
			})
			res.render('lxd', { title: data });
		}
	})
  
});

module.exports = router;
