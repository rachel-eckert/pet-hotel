const router = require("express").Router();
const { Pet, Room } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allPets = await Pet.findAll();
    res.json(allPets);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const pet = await Pet.findByPk(req.params.id, {
      include: {
        model: Room,
      },
    });
    res.json(pet);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newPet = await Pet.create(req.body);
    res.json(newPet);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const destroyed = await Pet.destroy({ where: { id: req.params.id } });
    res.json(destroyed);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const pet = await Pet.findByPk(req.params.id, {
      include: [{ model: Room }],
    });
    if (pet !== null) {
      let updatedPet = await Pet.update(req.body);
      res.json(updatedPet);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
