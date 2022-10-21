import React from "react";
import Album from "./Album.jsx";

const AllAlbums = (props) => {
const { albums } = props;
    return (
        <div id='albums' className='row wrap'>
            {albums.map((album) => {
                return <Album key={album.id} album={album} />
            })}
      </div>
    )
}

export default AllAlbums;

