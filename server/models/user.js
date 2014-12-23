var Datastore = require('nedb')
  , path = require('path')
  , db = new Datastore(path.join(__dirname+'/db.nedb'));
