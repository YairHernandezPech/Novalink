const sesionService = require("../service/sesion.service");

const createSesion = async (req, res) => {
    try {
        const sesion = await sesionService.createSesion(req.body);
        res.json(sesion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getSesiones = async (req, res) => {
    try {
        const sesiones = await sesionService.getSesiones();
        res.json(sesiones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getSesionById = async (req, res) => {
    try {
        const { id } = req.params;
        const sesion = await sesionService.getSesionById(id);
        if (!sesion) {
            return res.status(404).json({ error: "Sesión no encontrada" });
        }
        res.json(sesion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateSesion = async (req, res) => {
    try {
        const { id } = req.params;
        const sesion = await sesionService.updateSesion(id, req.body);
        res.json(sesion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const deleteSesion = async (req, res) => {
    try {
        const { id } = req.params;
        const sesion = await sesionService.deleteSesion(id);
        res.json(sesion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createSesion,
    getSesiones,
    getSesionById,
    updateSesion,
    deleteSesion
};
