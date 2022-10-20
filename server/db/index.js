const Sequelize = require("sequelize");
const db = require("./db");
const Album = require("./album");
const Song = require("./song");
const Artist = require("./artist");
// require each of your models here...

// There is a one-many relationship between Albums and Songs
Song.belongsTo(Album);
Album.hasMany(Song);

// There is a one-many relationship between Artists and Songs
Song.belongsTo(Artist);
Artist.hasMany(Song);

// There is a one-many relationship between Artists and Albums
Artist.hasMany(Album);
Album.belongsTo(Artist);

/** artist can have many albums
/** artist can have many songs
 * album can have many songs
 * 
*/
// ...and give them some nice associations here!

module.exports = {
  db,
  Album,
  Song,
  Artist,
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
};
