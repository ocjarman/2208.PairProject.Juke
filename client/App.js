import React, { useEffect, useState } from "react";
import AllAlbums from "./AllAlbums.jsx";
import Player from "./Player.jsx";
import Sidebar from "./Sidebar.jsx";
import axios from "axios";

const dummyAlbums = [
  {
    id: 1,
    name: "No Dummy",
    artworkUrl: "default-album.jpg",
    artistId: 1,
    artist: {
      id: 1,
      name: "The Crash Test Dummies",
    },
  },
  {
    id: 2,
    name: "I React to State",
    artworkUrl: "default-album.jpg",
    artistId: 1,
    artist: {
      id: 1,
      name: "The Crash Test Dummies",
    },
  },
];

// useEffect(() => {
//   console.log("SECOND USE EFFECT TRIGGERED");
//   setUserCount(users.length);
// }, [users]);

const App = () => {
  const [albums, setAlbums] = useState([]);
  const getAlbums = async () => {
    const response = await axios.get("/api/albums");
    setAlbums(response.data);
  };

  console.log(albums);

  useEffect(() => {
    console.log("USE EFFECT TRIGGERED");
    getAlbums();
  }, []);

  return (
    <div id="app">
      <div id="main" className="row container">
        <AllAlbums albums={albums} setAlbums={setAlbums} />
        <Sidebar />
        <Player />
        {/* The music starts here! */}
      </div>
    </div>
  );
};

export default App;
