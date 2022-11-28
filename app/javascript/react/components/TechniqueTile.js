import React from "react"
import { Link } from "react-router-dom"

const TechniqueTile = (props) => {
    

    return(
        <div className="song-card text-center">
            
                <div>
                    <p>Technique Name: {props.technique_name}</p>
                </div>
        </div>
    )
}

export default TechniqueTile