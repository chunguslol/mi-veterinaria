const express = require("express");
const router = express.Router();

const pet = require("../controllers/pet.controller");

router.get("/", pet.getPets);

router.post("/", pet.createPet);

router.get("/:id", pet.getPet);

router.put("/:id", pet.editPet);

router.delete("/:id", pet.deletePet);

module.exports = router;
