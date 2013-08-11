/**
 * PagesController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */


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
