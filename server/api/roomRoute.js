const router = require("express").Router();
const { Pet, Room } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allRooms = await Room.findAll();
    res.json(allRooms);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const room = await Room.findByPk(req.params.id, {
      include: [{ model: Pet }],
    });
    res.json(room);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newRoom = await Room.create(req.body);
    res.json(newRoom);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const destroyed = await Room.destroy({
      where: { id: req.params.id },
    });
    res.json(destroyed);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const room = await Room.findByPk(req.params.id, {
      include: [{ model: Pet }],
    });
    if (room) {
      let updatedRoom = await room.update(req.body);
      res.json(updatedRoom);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;
