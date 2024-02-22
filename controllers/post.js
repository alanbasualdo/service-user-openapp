const User = require("../models/User");

const postUser = async (req, res) => {
  try {
    const {
      name,
      lastName,
      cuil,
      birthdate,
      gender,
      userName,
      email,
      password,
      admissionDate,
      departureDate,
      payroll,
      branch,
      city,
      position,
      permissions,
    } = req.body;

    const existingUser = await User.find({ $or: [{ email }, { userName }] });
    if (existingUser.length > 0) {
      return res
        .status(400)
        .json({ success: false, message: "El usuario ya está registrado" });
    }

    const newUser = new User({
      name,
      lastName,
      cuil,
      birthdate,
      gender,
      userName,
      email,
      password,
      admissionDate,
      departureDate,
      payroll,
      branch,
      city,
      position,
      permissions,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Usuario creado exitosamente",
      data: newUser,
    });
  } catch (error) {
    console.error("Error creando usuario:", error);
    res
      .status(500)
      .json({ success: false, message: "Hubo un error al crear el usuario" });
  }
};

module.exports = {
  postUser,
};
