const db = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getUsers() {
    try {
        const [rows] = await db.query("SELECT * FROM usuario WHERE estatus = true");
        return rows;
    } catch (error) {
        console.log(error);
        throw error; // importante
    }
}
async function registerUser(data) {
    try {
        const { nombre, apellido_paterno, apellido_materno, email, password } = data;

        const hashedPassword = await bcrypt.hash(password, 10);
        // 1. Usuario
        const [userResult] = await db.query(
            "INSERT INTO usuario (nombre, email, password) VALUES (?, ?, ?)",
            [nombre, email, hashedPassword]
        );
        const user_id = userResult.insertId;

        return { id: user_id, nombre, email };

    } catch (error) {
        console.log(error);
        throw error;
    }
}
async function loginUser(email, password) {
    try {
        const [rows] = await db.query(
            "SELECT * FROM usuario WHERE email = ? AND estatus = true",
            [email]
        );

        const user = rows[0];

        if (!user) {
            throw new Error("USER_NOT_FOUND");
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            throw new Error("INVALID_PASSWORD");
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, nombre: user.nombre },
            process.env.JWT_SECRET,
            { expiresIn: "8h" }
        );

        return { token, user: { id: user.id, nombre: user.nombre, email: user.email } };
    } catch (error) {
        console.log(error);
        throw error;
    }
}
module.exports = {
    getUsers,
    registerUser,
    loginUser
};