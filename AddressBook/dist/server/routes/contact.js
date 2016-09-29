const Router = require('express').Router;
const contact = require('../controllers/contact');
const bodyParser = require('body-parser');

var router = new Router();

router.get('/', contact.list);
router.post('/', bodyParser.json(), contact.add);
router.delete('/:id', contact.remove);

module.exports = router;