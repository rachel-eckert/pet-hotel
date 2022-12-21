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
    const temperate = await Room.create({
      name: "Temperate Room",
      imageUrl:
        "https://cdn.decoist.com/wp-content/uploads/2015/05/Gorgeous-kids-bedroom-brings-home-the-tropical-style-in-a-delightful-fashion.jpg",
      description:
        "The perfect room for any animal looking to stay at an average temperature, who doesn't require any special environment.",
    });
    const palace = await Room.create({
      name: "Palace Room",
      imageUrl:
        "https://i0.wp.com/www.usafurnitureonline.com/wp-content/uploads/2018/01/Homey-Design-HD-820-Royal-Palace-Sofa-Set.jpg?fit=555%2C381&ssl=1?v=1621366395",
      description:
        "An upscale room fit for any king or queen. Available at an upcharge. Includes a complimentary spa experience and a daily brushing.",
    });
    const desert = await Room.create({
      name: "Desert Reptile Room",
      imageUrl:
        "https://img.hunkercdn.com/375/clsd/1/14/7651aacd28454a27ba9e1e1e0d11aa0e.jpg",
      description:
        "This room was specifically designed for reptiles requiring a dry and hot environment. Each reptile is individually housed in tanks that exceed industry standards. Tanks are monitored for temperature at all times.",
    });
    const tropical = await Room.create({
      name: "Tropical Reptile Room",
      imageUrl:
        "https://cdn.youpic.com/large/251042_OfKeAeIWetIMzeG3_186445.jpg",
      description:
        "This room was specifically designed for reptiles requiring a tropical environment. Each reptile is individually housed in tanks that exceed industry standards. Tanks are monitored for humidity and temperature at all times.",
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
      age: 0.5,
      roomId: tundra.id,
    });
    const milo = await Pet.create({
      name: "Milo",
      species: "Guinea pig",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/George_the_amazing_guinea_pig.jpg/1200px-George_the_amazing_guinea_pig.jpg",
      food: "Timothy Hay and Oxbow Food",
      age: 5,
      roomId: temperate.id,
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
    const Raf = await Pet.create({
      name: "Raf",
      species: "Leopard Gecko",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrgGqJodmGjt2N9aXjaYDlUKqO6MBYBHj8Q&usqp=CAU",
      food: "Mealworms and crickets",
      age: 12,
      roomId: desert.id,
    });
    const cronos = await Pet.create({
      name: "Cronos",
      species: "Crested Gecko",
      imageUrl: "https://a-z-animals.com/media/2022/01/crested-gecko.jpg",
      food: "Pangea with watermelon",
      age: 7,
      roomId: tropical.id,
    });
    const ang = await Pet.create({
      name: "Ang",
      species: "Bearded Dragon",
      imageUrl:
        "https://www.everythingreptiles.com/wp-content/uploads/2020/03/Bearded-Dragon.jpg",
      food: "Collard greens, crickets, and superworms",
      age: 5,
      roomId: desert.id,
    });
    const sol = await Pet.create({
      name: "Sol",
      species: "White's Tree Frog",
      imageUrl:
        "https://reptilesmagazine.com/wp-content/uploads/data-import/484081e3/whites-treefrog745.jpg",
      food: "Crickets",
      age: 2,
      roomId: tropical.id,
    });
  } catch (err) {
    console.error(err);
    db.close();
  }
};

module.exports = seed;
seed();
