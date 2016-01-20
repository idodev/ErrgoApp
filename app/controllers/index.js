var router = require('express').Router();

router.use('/', require('./home'));
router.use('/users', require('./users'));

module.exports = router;
