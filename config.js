var path = require('path')
  , config;
config = {
  production: {

  },
  development: {
    database: {
      client: 'nedb',
      filename: path.join(__dirname, 'server/db/app.db')
    }
  }
}
