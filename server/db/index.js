const db = require("./db");

const Room = require("./models/room");
const Pet = require("./models/pet");

Pet.belongsTo(Room);
Room.hasMany(Pet);

module.exports = {
  db,
  Room,
  Pet,
};
