const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const queryToken = req.query.api_token;
    let token = null;

    if (authHeader) {
        token = authHeader.split(' ')[1];
    } else if (queryToken) {
        token = queryToken;
    }
    if (!token) return res.status(401).json({ error: "Token requerido" });


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ error: "Token inválido" });
    }
}

module.exports = verificarToken;