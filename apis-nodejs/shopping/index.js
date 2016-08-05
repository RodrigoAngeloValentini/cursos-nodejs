var express = require('express');
var router = express.Router();

router.get('/', require('./services/find'));
router.delete('/:id/:productId', require('./services/remove'));
router.post('/',require('./services/create'));

module.exports = router;