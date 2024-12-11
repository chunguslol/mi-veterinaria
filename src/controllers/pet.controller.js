const Pet = require("../models/pet");

const petCtrl  = {};

petCtrl.getPets = async (req, res, next) => {
  const pets = await Pet.find();
  res.json(pets);
};

petCtrl.createPet = async (req, res, next) => {
  const pet = new Pet({
    name: req.body.name,
    race: req.body.race,
    color: req.body.color,
    age: req.body.age,
  });
  await pet.save();
  res.json({ status: "Pet created" });
};

petCtrl.getPet = async (req, res, next) => {
  const { id } = req.params;
  const pet = await Pet.findById(id);
  res.json(pet);
};

petCtrl.editPet = async (req, res, next) => {
  const { id } = req.params;
  await Pet.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Pet Updated" });
};

petCtrl.deletePet = async (req, res, next) => {
  await Pet.findByIdAndDelete(req.params.id);
  res.json({ status: "Pet Deleted" });
};

module.exports = petCtrl;
