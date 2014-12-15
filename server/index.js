var users = require('./routes/users');

function startServer(app, port) {
	app.use('/users', users);

	app.listen(port, function() {
		console.log('Server listening on port '+port);
	});
};

module.exports = startServer;