const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();



// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/pets", require("./routes/pet.routes"));

app.get("/", (req, res) => {
    res.send("Backend funcionando correctamente.");
  });
  
  // Manejo de errores para rutas no encontradas
  app.use((req, res, next) => {
    res.status(404).json({ message: "Ruta no encontrada." });
  });

module.exports = app;

