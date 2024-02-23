const { login, renewToken } = require("../controllers/authController");
const { checkJWT } = require("../helpers/generateJWT");

const router = require("express").Router();

router.post("/login", login);

router.get("/renew", checkJWT, renewToken);

module.exports = router;
