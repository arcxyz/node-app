var express = require('express')
	, startServer = require('./server')
	, port = process.env.PORT || 3000
	, app = express();

startServer(app, port);