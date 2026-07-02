const express = require("express");
const router = express.Router();
const verificarToken = require("../middlewares/auth");

const userController = require("../controller/usuario.controller");

//USUARIOS
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/usuarios", verificarToken, userController.getUsers);

module.exports = router;