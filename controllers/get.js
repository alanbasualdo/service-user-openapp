const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const [total, users] = await Promise.all([
      User.countDocuments(),
      User.find(),
    ]);
    res.json({
      success: true,
      total,
      users,
    });
  } catch (error) {
    console.error("Error al obtener los usuarios", error.message);
    res.status(500).json({
      success: false,
      error: "Error interno del servidor",
    });
  }
};

module.exports = {
  getUsers,
};
