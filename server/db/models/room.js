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
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-rooms-hbx090117sherwin01-1558467850.jpg",
  },
  description: {
    type: Sequelize.TEXT("long"),
  },
});
