const db = require("../database/db");

async function createSesion(data) {
    try {
        const { usuario_id, nombre, session_id, telefono, nombre_whatsapp } = data;
        const [result] = await db.execute(
            "INSERT INTO sesiones (usuario_id, nombre, session_id, telefono, nombre_whatsapp) VALUES (?, ?, ?, ?, ?)",
            [usuario_id, nombre, session_id, telefono, nombre_whatsapp]
        );
        return result;
    } catch (error) {
        throw error;
    }
}
async function getSesiones() {
    try {
        const [rows] = await db.query("SELECT * FROM sesiones where estatus = true");
        return rows;
    } catch (error) {
        throw error;
    }
}
async function getSesionById(id) {
    try {
        const [rows] = await db.query("SELECT * FROM sesiones WHERE id = ? AND estatus = true", [id]);
        return rows[0];
    } catch (error) {
        throw error;
    }
}
async function updateSesion(id, data) {
    try {
        const { usuario_id, nombre, session_id, telefono, nombre_whatsapp } = data;
        const [result] = await db.execute(
            "UPDATE sesiones SET usuario_id = ?, nombre = ?, session_id = ?, telefono = ?, nombre_whatsapp = ? WHERE id = ?",
            [usuario_id, nombre, session_id, telefono, nombre_whatsapp, id]
        );
        return result;
    } catch (error) {
        throw error;
    }
}
async function deleteSesion(id) {
    try {
        const [result] = await db.execute("UPDATE sesiones SET estatus = false WHERE id = ?", [id]);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createSesion,
    getSesiones,
    getSesionById,
    updateSesion,
    deleteSesion
};