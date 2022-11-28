import React from "react"
import { Link } from "react-router-dom"

const IndexSongTiles = (props) => {

    return(
        <div className="grid-x grid-margin-x">
            <div className="cell text-center large-4 small-12 callout song-card">
                <p>{props.name}</p>
                <p>{props.album}</p>
                <p>{props.artist}</p>
            </div>
        </div>
    )
}

export default IndexSongTiles