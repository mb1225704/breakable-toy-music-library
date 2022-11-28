import React from "react"
import { Link } from "react-router-dom"

const IndexSongTiles = (props) => {
    
    return(
        <div className="song-card text-center">
            <Link to={`/songs/${props.id}/`}>
                <div>
                    <p>{props.name}</p>
                    <p>{props.album}</p>
                    <p>{props.artist}</p>
                </div>
            </Link>
        </div>
    )
}

export default IndexSongTiles