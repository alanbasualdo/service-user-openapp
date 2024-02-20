/* const BlueCard = require("../models/BlueCard"); */

const createUser = async (req, res) => {
  console.log(req.body);

  res.json({
    msg: "hola",
  });
};

module.exports = {
  createUser,
};
