import React from "react";
import AllAlbums from "./AllAlbums.jsx";

const Album = (props) => {
    const { album } = props
    return (
        <div className='album'>
          <a>
            <img src={album.artworkUrl} />
            <p>{album.name}</p>
            <small>{album.artistId}</small>
          </a>
        </div>
    )
}

export default Album