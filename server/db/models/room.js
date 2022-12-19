const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("rooms", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://media.cntraveler.com/photos/6310f9a1ef65dcb9b6e51113/master/w_4272,h_2848,c_limit/Corvin-Castle,-Romania-GettyImages-505538365.jpg",
  },
  description: {
    type: Sequelize.TEXT("long"),
  },
});
