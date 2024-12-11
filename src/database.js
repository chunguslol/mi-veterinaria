require('dotenv').config();
const mongoose = require("mongoose");


//const URI = "mongodb+srv://agustinledezma:70GItllLBS8yGCEW@cluster0.8mixb.mongodb.net/mean-pets?retryWrites=true&w=majority&appName=Cluster0";
const URI = process.env.MONGO_URI;


mongoose
  .set('strictQuery', false)
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

module.exports = mongoose;
