import React from "react"
import { Link } from "react-router-dom"

const SpotifyTiles = (props) => {
    
    return(
        <div className="song-card text-center" >
            {/* <Link to={`/songs/${props.id}/`}> */}
                <div >
                    <p onClick={props.handleclick}>{props.name}</p>
                    
                </div>
            {/* </Link> */}
        </div>
    )
}

export default SpotifyTiles