const sesionModel = require("../models/sesion.models");

const createSesion = async (data) => {
    return await sesionModel.createSesion(data);
};

const getSesiones = async () => {
    return await sesionModel.getSesiones();
};

const getSesionById = async (id) => {
    return await sesionModel.getSesionById(id);
};

const updateSesion = async (id, data) => {
    const sesion = await sesionModel.getSesionById(id);
    if (!sesion) {
        throw new Error("Sesión no encontrada");
    }
    const updatedSesion = await sesionModel.updateSesion(id, data);
    return updatedSesion;
};

const deleteSesion = async (id) => {
    return await sesionModel.deleteSesion(id);
};

module.exports = {
    createSesion,
    getSesiones,
    getSesionById,
    updateSesion,
    deleteSesion,
};