# Bloggie

Bloggie is blogging system built upon cutting-edge web technologies. It's built on top of #node #sailsjs (and possibly #angular in the future).


## Installation

``` bash

// clone the repository, develop channel
git clone git@github.com:najlepsiwebdesigner/bloggie.git

// go to cloned repository
cd bloggie

// install 
npm install

// run the app
npm run-script work

```


## Development

### Architecture

- standard [sails.js](http://sailsjs.org/#!) applications [(docs)](http://sailsjs.org/#!)
- uses [passport.js](http://passportjs.org/) for authentification [(docs)](http://passportjs.org/guide/)
- for auto-restart it uses [nodemon](https://github.com/remy/nodemon) [(docs)](https://github.com/remy/nodemon)
- templating engine is [jade](http://jade-lang.com/) [(docs)](http://jade-lang.com/)
- for api docs, bloggie uses I/O Docs in file **./apidocs.json** which you can edit for example at [iodoctor](http://iodoctor.net/)


### Workflow

Preferred workflow starts with command:
``` js
	npm run-script work
```


This command will execute sails lift via nodemon, so auto restart of server after source file modifications in enabled. If you don't like the auto-restart feature, more startup options are available:
``` js
	// run app.js
	node app.js

	// run sails application
	sails lift
```

Useful tools during development:

**Templating**
* html to jade converter http://html2jade.aaron-powell.com/

**Readme help**
* https://help.github.com/articles/github-flavored-markdown
* https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet


### Authentification 

Authentification id provided by passport http://passportjs.org/ in controller **AuthController**.
Implementation from https://github.com/webjames/sails-passport-example.
