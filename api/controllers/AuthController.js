// api/controllers/AuthController.js
 
var passport = require('passport');
 
var AuthController = {
 
  index: function (req,res)
	{
		console.log('test');
		res.view();
	},
 
	create: function(req, res)
	{
		console.log('test2');
		passport.authenticate('local', function(err, user, info)
		{
			if ((err) || (!user))
			{
				res.redirect('/login');
				return;
			}

			req.logIn(user, function(err)
			{
				if (err)
				{
					res.view();
					console.log(err);
					return;
				}
				
				res.redirect('/');
				return;
			});
		})(req, res);
	},
 
	logout: function (req,res)
	{
		req.logout();
		res.redirect('/');
	}
 
};
 
module.exports = AuthController;