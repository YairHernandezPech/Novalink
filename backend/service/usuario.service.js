const userModel = require("../models/usuario.models");

async function getUsers() {
    return await userModel.getUsers();
}
async function registerUser(data) {
    return await userModel.registerUser(data);
}
async function loginUser(email, password) {
    return await userModel.loginUser(email, password);
}
module.exports = {
    getUsers,
    registerUser,
    loginUser
};