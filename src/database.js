require('dotenv').config();
const mongoose = require("mongoose");


//const URI = "mongodb+srv://agustinledezma:70GItllLBS8yGCEW@cluster0.8mixb.mongodb.net/mean-pets?retryWrites=true&w=majority&appName=Cluster0";
const URI = process.env.MONGO_URI;

if (!URI) {
  console.error("Error: MONGO_URI no está definida en el archivo .env");
  process.exit(1); // Detiene la ejecución si no hay URI
}


mongoose
  .set('strictQuery', false)
  .connect(URI, {
    useUnifiedTopology: true
  })
  .then((db) => console.log("Conexión a MongoDB Atlas exitosa"))
  .catch((err) => console.error("Error al conectar con MongoDB:", err));

module.exports = mongoose;
