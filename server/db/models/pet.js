const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("students", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  species: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.heart.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg?h=598&w=800&hash=E7EB334DBE3D1B6F8000F155B0BFD708",
  },
  food: {
    type: Sequelize.STRING,
    defaultValue: "Purina",
  },
  age: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  roomId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});
