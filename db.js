var MongoClient = require('mongodb').MongoClient;
var f = require('util').format;
var user = encodeURIComponent('root');
var password = encodeURIComponent('aswin123');
var url = f("mongodb://%s:%s@husky-shard-00-00-xjhku.mongodb.net:27017,husky-shard-00-01-xjhku.mongodb.net:27017,husky-shard-00-02-xjhku.mongodb.net:27017/test?ssl=true&replicaSet=husky-shard-0&authSource=admin", user, password);
var state = {
    db: null,
}
MongoClient.connect(url, function(err, database) {
    if (err) throw err;
    console.log("connection established!");
    state.db = database;
});
exports.get = function() {
    return state.db
}