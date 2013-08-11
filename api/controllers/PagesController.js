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
  flow : function (req, res) {
  		Pages.find().done(function(err, pages) {
		  // Error handling
			if (err) {
				return console.log(err);
		  // Found multiple pages!
			} else {
				console.log("Pages found:", pages);
				// res.send(pages);
				res.view({
					pages : pages
				});
			}
		});
  	}
  

};
