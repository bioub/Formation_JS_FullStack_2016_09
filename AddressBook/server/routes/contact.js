const Router = require('express').Router;
const contact = require('../controllers/contact');

var router = new Router();

router.get('/', contact.list);
router.post('/', contact.add);
router.delete('/:id', contact.remove);

module.exports = router;