const { Album, Artist, Song } = require("../db");

const router = require("express").Router();

// connect your API routes here!

router.get("/albums", async (req, res) => {
  const albums = await Album.findAll();
  //   console.log(albums);
  res.send(albums);
});

router.get("/albums/:id", async (req, res) => {
  console.log(req.params.id);
  const album = await Album.findAll({
    where: {
      id: req.params.id,
    },
    include: [Artist, Song],
  });
  res.send(album);
});

module.exports = router;

// Souvenir.findAll({
//     include: [Person, Place, Thing],
//   }),
