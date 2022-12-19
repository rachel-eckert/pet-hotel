const { db, Pet, Room } = require("./server/db/index");

const seed = async () => {
  try {
    await db.sync({ force: true });
    const tundra = await Room.create({
      name: "Tundra Room",
      imageUrl:
        "https://www.homedesigninspired.com/wp-content/uploads/2016/01/frozen-themed-room-feature.jpg",
      description:
        "The perfect room for any animal looking to enjoy some time in the cold!",
    });
    const tropical = await Room.create({
      name: "Tropical Room",
      imageUrl:
        "https://cdn.decoist.com/wp-content/uploads/2015/05/Gorgeous-kids-bedroom-brings-home-the-tropical-style-in-a-delightful-fashion.jpg",
      description: "The perfect room for any animal looking to stay warm..",
    });
    const palace = await Room.create({
      name: "Palace Room",
      imageUrl:
        "https://i0.wp.com/www.usafurnitureonline.com/wp-content/uploads/2018/01/Homey-Design-HD-820-Royal-Palace-Sofa-Set.jpg?fit=555%2C381&ssl=1?v=1621366395",
      description:
        "An upscale room fit for any king or queen. Available at an upcharge. Includes a complimentary spa experience and a daily brushing.",
    });
    const bella = await Pet.create({
      name: "Bella",
      species: "Dog",
      imageUrl:
        "https://cdn.britannica.com/72/234472-050-735B6214/maltese-dog.jpg",
      food: "Fresh Pet",
      age: 2,
      roomId: palace.id,
    });
    const athena = await Pet.create({
      name: "Athena",
      species: "Dog",
      imageUrl:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F06%2F14%2Fsiberian-husky-puppy-grass-146571433-2000.jpg",
      food: "Puppy Chow",
      age: 0,
      roomId: tundra.id,
    });
    const milo = await Pet.create({
      name: "Milo",
      species: "Guinea pig",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/George_the_amazing_guinea_pig.jpg/1200px-George_the_amazing_guinea_pig.jpg",
      food: "Timothy Hay and Oxbow Food",
      age: 5,
      roomId: tropical.id,
    });
    const giovanni = await Pet.create({
      name: "Giovanni",
      species: "Cat",
      imageUrl:
        "https://cdn.gobankingrates.com/wp-content/uploads/2017/07/5-Persian-Piyato-shutterstock_257314705.jpg",
      food: "Royal Canin",
      age: 1,
      roomId: palace.id,
    });
  } catch (err) {
    console.error(err);
    db.close();
  }
};

module.exports = seed;
seed();
