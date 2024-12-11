const mongoose = require("mongoose");
const { Schema } = mongoose;

const petSchema = new Schema(
  {
    name: { type: String, required: true },
    race : { type: String, required: true }, 
    color : { type: String, required: true }, 
    age : { type: Number, required: true }, 
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Pet", petSchema);
