var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Hello World!');
});

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://127.0.0.1:3000/api)
router.get('/aswin', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
module.exports = router;