var express = require('express');
var router = express.Router();
var user = require('./controllers/user');

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
router.get('/user', user.index);
router.get('/', user.index);

/* GET request for creating a user. NOTE This must come before routes that display user (uses id) */
router.get('/user/create', user.user_create_get);

/* POST request for creating user. */
router.post('/user/create', user.user_create_post);

/* GET request to delete user. */
router.get('/user/:id/delete', user.user_delete_get);

// POST request to delete user
router.post('/user/:id/delete', user.user_delete_post);

/* GET request to update user. */
router.get('/user/:id/update', user.user_update_get);

// POST request to update user
router.post('/user/:id/update', user.user_update_post);

/* GET request for one user. */
router.get('/user/:id', user.user_detail);

/* GET request for list of all user items. */
router.get('/users', user.user_list);


module.exports = router;