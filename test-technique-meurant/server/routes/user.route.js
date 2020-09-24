const router = require("express").Router();
const user = require('../controller/user.controller');

router.get('/', user.getAllUser);
router.post('/', user.createUser);

module.exports = router;
