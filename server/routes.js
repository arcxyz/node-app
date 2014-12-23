var users = require('middleware/users');

module.exports = function(app) {
  app.use('/users', users);
}
