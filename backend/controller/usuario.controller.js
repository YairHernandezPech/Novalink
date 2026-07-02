const userService = require("../service/usuario.service");

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const registerUser = async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await userService.loginUser(email, password);

        res.json(data);

    } catch (error) {

        if (error.message === "USER_NOT_FOUND") {
            return res.status(404).json({ error: "Usuario no existe" });
        }

        if (error.message === "INVALID_PASSWORD") {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getUsers,
    registerUser,
    loginUser

};