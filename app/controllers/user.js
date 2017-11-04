var db = require('../../db');
exports.index = function(req, res) {
    console.log("user");
    res.json({ message: 'hooray! welcome to user controller!' });
};

// Display list of all users
exports.user_list = function(req, res) {
    var collection = db.get().collection('notes');
    collection.find({}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
    });
};

// Display detail page for a specific user
exports.user_detail = function(req, res) {
    var collection = db.get().collection('notes');
    console.log(req.params.id);
    var query = { user: req.params.id };
    collection.find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

// Handle user create on POST
exports.user_create_post = function(req, res) {
    var collection = db.get().collection('notes');
    const note = { user: req.body.user, title: req.body.title };
    collection.insert(note, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send(result.ops[0]);
        }
    });
};

// Handle user delete on POST
exports.user_delete_post = function(req, res) {
    var id = req.params.id;
    var collection = db.get().collection('notes');
    var myquery = { '_id': id };
    collection.deleteOne({ '_id': id }, { safe: true }, function(err, obj) {
        if (err) throw err;
        console.log(obj, " document(s) deleted");
        collection.find({}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
};

// Handle user update on POST
exports.user_update_post = function(req, res) {
    var id = req.params.id;
    var wine = req.body;
    var collection = db.get().collection('notes');
    collection.update({ '_id': id }, wine, { safe: true }, function(err, result) {
        if (err) {
            console.log('Error updating wine: ' + err);
            res.send({ 'error': 'An error has occurred' });
        } else {
            console.log('' + result + ' document(s) updated');
            res.send(wine);
        }
    });
};