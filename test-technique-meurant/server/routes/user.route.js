const router = require("express").Router();
const user = require('../controller/user.controller');

router.get('/', user.getAllUser);
router.post('/', user.createUser);
router.put('/:id', user.updateUser);

module.exports = router;
