const express = require("express");
const router = express.Router();
const verificarToken = require("../middlewares/auth");

const userController = require("../controller/usuario.controller");
const sesionController = require("../controller/sesion.controller");

//USUARIOS
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/usuarios", verificarToken, userController.getUsers);

//SESIONES
router.post("/sesiones", sesionController.createSesion);
router.get("/sesiones", sesionController.getSesiones);
router.get("/sesiones/:id", sesionController.getSesionById);
router.put("/sesiones/:id", sesionController.updateSesion);
router.delete("/sesiones/:id", sesionController.deleteSesion);

module.exports = router;