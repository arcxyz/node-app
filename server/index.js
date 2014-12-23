var configRoutes = require('./routes');

function startServer(app, port) {
	configRoutes(app);

	app.listen(port, function() {
		console.log('Server listening on port '+port);
	});
};

module.exports = startServer;
