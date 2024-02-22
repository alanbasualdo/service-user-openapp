const { postUser } = require("../controllers/post");
const { getUsers } = require("../controllers/get");

const router = require("express").Router();

router.post("/post", postUser);

router.get("/", getUsers);

module.exports = router;
