import React from "react"
import NewTechniqueForm from "./NewTechniqueForm"
import TechniqueTile from "./TechniqueTile"
import { Link } from "react-router-dom"

const ShowSong = (props) => {
    
    const songTechniqueTiles = props.techniques.map((songTechnique => {
        return (
        <TechniqueTile 
            key={songTechnique.id}
            id={songTechnique.id}
            technique_name={songTechnique.technique_name}
            />
        )
    }))
    return(
        <div className="song-card text-center">
            
                <div>
                    <p>Song Name: {props.song}</p>
                    <p>Album Name: {props.album_name}</p>
                    <p>Artist Name: {props.artist_name}</p>
                </div>
                <div>{songTechniqueTiles}</div>
                <NewTechniqueForm 
                song_id = {props.id}
                setTechniques = {props.setTechniques}
                />
        </div>
    )
}

export default ShowSong