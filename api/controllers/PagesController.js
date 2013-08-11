/**
 * PagesController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var passport = require('passport');

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */





  create : function (req, res) {
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




  homepage : function (req, res) {
  	var defaultPage = '12345';
  	
  	// req.params['page'] = defaultPage;

  	Pages.find({
  		name : defaultPage
  	}).done(function(err, page) {
	  // Error handling
		if (err) {
			return console.log(err);
	  // Found multiple pages!
		} else {
			// console.log("Page found:", page);


			if (page.length > 0){
				// res.send(pages);
				res.view('pages/page',{
					page : page.pop()
				});	
			} else {
				res.redirect('404');
			}
			
		}
	});

  	// this.page(req, res);
  },


  page : function (req, res) {
  	var page = req.param('page');

  	Pages.find({
  		name : page
  	}).done(function(err, page) {
	  // Error handling
		if (err) {
			return console.log(err);
	  // Found multiple pages!
		} else {
			console.log("Page found:", page);


			if (page.length > 0){
				// res.send(pages);
				res.view('pages/page',{
					page : page.pop()
				});	
			} else {
				res.redirect('404');
			}
			
		}
	});
  },
  edit : function (req, res) {
  	var page = req.param('page');

  	Pages.find({
  		name : page
  	}).done(function(err, page) {
	  // Error handling
		if (err) {
			return console.log(err);
	  // Found multiple pages!
		} else {
			console.log("Page found:", page);


			if (page.length > 0){
				// res.send(pages);
				res.view('pages/edit',{
					page : page.pop()
				});	
			} else {
				res.redirect('404');
			}
			
		}
	});
  },


  flow : function (req, res) {

  		Pages.find().done(function(err, pages) {
		  // Error handling
			if (err) {
				return console.log(err);
		  // Found multiple pages!
			} else {
				// console.log("Pagess found:", pages);
				// res.send(pages);
				res.view({
					pages : pages
				});
			}
		});
  	}
  

};
