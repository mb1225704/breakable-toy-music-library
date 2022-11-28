import React from "react"
import { Link } from "react-router-dom"

const ShowSong = (props) => {
    

    return(
        <div className="song-card text-center">
            
                <div>
                    <p>Song Name: {props.song}</p>
                    <p>Album Name: {props.album_name}</p>
                    <p>Artist Name: {props.artist_name}</p>
                </div>
        </div>
    )
}

export default ShowSong