var express = require('express');
var router = express.Router();
var fetchController= require('./controller');

router.get('/fetch-data',fetchController.fetchData);

module.exports = router;