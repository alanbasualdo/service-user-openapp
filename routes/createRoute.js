const { createUser } = require("../controllers/create");

const router = require("express").Router();

router.post("/create", createUser);

module.exports = router;
