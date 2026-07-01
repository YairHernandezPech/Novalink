require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./routes/api");

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;

//Rutas de la API
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});